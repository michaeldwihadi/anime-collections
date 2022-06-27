import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import EditCollectionNameModal from "../../components/EditCollectionNameModal/EditCollectionNameModal";
import RemoveAnimeModal from "../../components/RemoveAnimeModal/RemoveAnimeModal";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
  Container,
  LinkContainer,
  ListContainer,
  AnimeImage,
  AnimeTitle,
  RemoveBtn,
  CollectionTitleContainer,
  EditCollectionBtn,
  CollectionTitleName,
} from "./Style";

const AnimeCollectionDetail = () => {
  const location = useLocation();
  const [openRemoveAnimeModal, setOpenRemoveAnimeModal] = useState(false);
  const [selectedAnimeId, setSelectedAnimeId] = useState();
  const [selectedAnimeTitle, setselectedAnimeTitle] = useState("");
  const [newCollectionName, setNewCollectionName] = useState("");
  const [editCollectionModalOpen, setEditCollectionModalOpen] = useState(false);
  let { selectedCollection } = location.state;
  let currentCollection = !newCollectionName
    ? JSON.parse(localStorage.getItem(`${selectedCollection}`))
    : JSON.parse(localStorage.getItem(`${newCollectionName}`));

  const newSelectedCollectionName = (data) => {
    setNewCollectionName(data);
  };

  const removeAnime = (animeId, animeTitle) => {
    setSelectedAnimeId(animeId);
    setselectedAnimeTitle(animeTitle);
    setOpenRemoveAnimeModal(true);
  };

  const editCollection = () => {
    setEditCollectionModalOpen(true);
  };

  return (
    <>
      {editCollectionModalOpen && (
        <EditCollectionNameModal
          setEditCollectionModalOpen={setEditCollectionModalOpen}
          selectedCollectionName={selectedCollection}
          newSelectedCollectionName={newSelectedCollectionName}
        />
      )}
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
        <CollectionTitleName>
          {newCollectionName ? newCollectionName : selectedCollection}{" "}
          Collection ({currentCollection.length})
        </CollectionTitleName>
        <span>
          <EditCollectionBtn onClick={() => editCollection()}>
            Edit
          </EditCollectionBtn>
        </span>
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
