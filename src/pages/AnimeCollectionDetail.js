import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";

import RemoveAnimeModal from "../components/RemoveAnimeModal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const LinkContainer = styled(Link)`
  text-decoration: none;
  color: black;
`;

const ListContainer = styled.div`
  width: 300px;
  margin-right: 100px;
  margin-left: 61px;
  margin-bottom: 40px;
  margin-top: 25px;
  border-radius: 12px;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: black;
  text-align: center;
  border: 1px solid #efefef;
  box-shadow: 0 0 20px -5px rgb(0 0 0 / 25%);
  &:hover {
    box-shadow: 0 0 20px -5px rgb(0 0 0 / 75%);
  }
`;

const AnimeImage = styled.img`
  width: 300px;
  height: 425px;
  border-radius: 12px 12px 0px 0px;
  object-fit: cover;
`;

const AnimeTitle = styled.p`
  width: 200px;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const RemoveBtn = styled.button`
  background-color: #ffffff;
  border: none;
  color: red;
  padding: 8px 31px;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: 12px;
  font-weight: bold;
`;

const CollectionTitleContainer = styled.div`
  padding-top: 50px;
  margin-left: 68px;
  font-size: 21px;
`;

const AnimeCollectionDetail = () => {
  const [openRemoveAnimeModal, setOpenRemoveAnimeModal] = useState(false);
  const location = useLocation();
  const { selectedCollection } = location.state;
  const [selectedAnimeId, setSelectedAnimeId] = useState();
  const [selectedAnimeTitle, setselectedAnimeTitle] = useState("");
  const currentCollection = JSON.parse(
    localStorage.getItem(`${selectedCollection}`)
  );

  const removeAnime = (animeId, animeTitle) => {
    setSelectedAnimeId(animeId);
    setselectedAnimeTitle(animeTitle);
    setOpenRemoveAnimeModal(true);
  };
  return (
    <>
      {openRemoveAnimeModal && (
        <RemoveAnimeModal
          setOpenRemoveAnimeModal={setOpenRemoveAnimeModal}
          selectedCollection={selectedCollection}
          selectedAnimeId={selectedAnimeId}
          selectedAnimeTitle={selectedAnimeTitle}
        />
      )}
      <Navbar />
      <CollectionTitleContainer>
        <h2>
          {selectedCollection} Collection ({currentCollection.length})
        </h2>
      </CollectionTitleContainer>
      <Container>
        {currentCollection.map((data) => {
          return (
            <>
              <ListContainer>
                <LinkContainer
                  to="/details"
                  state={{
                    id: `${data.id}`,
                    title: `${data.title}`,
                    image: `${data.image}`,
                  }}
                >
                  <AnimeImage src={data.image} alt={data.title} />
                  <AnimeTitle>{data.title}</AnimeTitle>
                </LinkContainer>
                <RemoveBtn
                  onClick={() => {
                    removeAnime(data.id, data.title);
                  }}
                >
                  Remove
                </RemoveBtn>
              </ListContainer>
            </>
          );
        })}
      </Container>
      <Footer />
    </>
  );
};

export default AnimeCollectionDetail;
