import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";

import { useAnimeDetails } from "../hooks/useAnimeDetails";
import CollectionListModal from "../components/CollectionListModal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const AnimeImage = styled.img`
  width: 300px;
  height: 425px;
  object-fit: cover;
  margin-right: 50px;
  margin-top: 10px;
  margin-left: 25rem;
  border-radius: 12px;
`;

const AnimeTitle = styled.h1`
  margin-top: 0;
`;

const AnimeDetailContainer = styled.div`
  margin-left: -10rem;
`;

const Columns = styled.div`
  float: left;
  width: 50%;
  margin-top: 100px;
`;

const Row = styled.div`
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  margin-top: 40px;
  margin-bottom: 100px;
`;

const AnimeDesc = styled.p`
  max-width: 600px;
  text-align: justify;
`;

const CollectionButton = styled.button`
  background-color: #ffffff;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 70px 2px;
  cursor: pointer;
  border-radius: 12px;
  width: 600px;
  border: 2px solid black;
  font-weight: bold;
  &:hover {
    background-color: black;
    color: white;
  }
`;

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
