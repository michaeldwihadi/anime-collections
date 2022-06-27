import React, { useState } from "react";

import { useAnimeList } from "../../hooks/useAnimeList";
import Pagination from "../../components/Pagination/Pagination";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";

import { Container, ListContainer, AnimeImage, AnimeTitle } from "./Style";

const AnimeList = () => {
  const [page, setPage] = useState(1);
  const limit = 10;
  const { error, data, loading } = useAnimeList(page);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Container>
            {data.Page.media.map((media) => {
              return (
                <ListContainer
                  to="/details"
                  state={{
                    id: `${media.id}`,
                    title: `${media.title.romaji}`,
                    image: `${media.coverImage.large}`,
                  }}
                >
                  <AnimeImage
                    src={media.coverImage.large}
                    alt={media.title.romaji}
                  />
                  <AnimeTitle>{media.title.romaji}</AnimeTitle>
                </ListContainer>
              );
            })}
          </Container>
          <Pagination
            page={page}
            setPage={setPage}
            limit={limit}
            total={data.Page.pageInfo.total}
          />
          <Footer />
        </>
      )}
    </>
  );
};

export default AnimeList;
