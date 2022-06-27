import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { useAnimeDetails } from "../../hooks/useAnimeDetails";
import CollectionListModal from "../../components/CollectionListModal/CollectionListModal";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";

import {
  AnimeImage,
  AnimeTitle,
  AnimeDetailContainer,
  Columns,
  Row,
  AnimeDesc,
  CollectionButton,
} from "./Style";

const AnimeDetail = () => {
  const location = useLocation();
  const { title, image, id } = location.state;
  const [modalOpen, setModalOpen] = useState(false);
  const { data, loading, error } = useAnimeDetails(id);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {modalOpen && (
            <CollectionListModal
              setOpenModal={setModalOpen}
              animeTitle={title}
              animeId={id}
              BannerImg={image}
            />
          )}
          <Navbar />
          <Row>
            <Columns>
              <AnimeImage src={image} alt={title} />
            </Columns>
            <Columns>
              <AnimeDetailContainer>
                <AnimeTitle>{title}</AnimeTitle>
                <p>Genres : {data.Media.genres.toString()}</p>
                <p>Episodes : {data.Media.episodes}</p>
                <p>Status : {data.Media.status}</p>
                <p>Description :</p>
                <AnimeDesc
                  dangerouslySetInnerHTML={{ __html: data.Media.description }}
                />
                <CollectionButton onClick={() => setModalOpen(true)}>
                  Add to My Collection
                </CollectionButton>
              </AnimeDetailContainer>
            </Columns>
          </Row>
          <Footer />
        </>
      )}
    </>
  );
};

export default AnimeDetail;
