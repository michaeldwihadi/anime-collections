import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  ModalBackground,
  ModalContainer,
  Title,
  TitleCloseBtn,
  Body,
  Footer,
  CollectionNoBtn,
  CollectionYesBtn,
  CloseBtn,
  AnimeTitle,
} from "./Style";

const RemoveAnimeModal = ({
  setOpenRemoveAnimeModal,
  selectedCollection,
  selectedAnimeId,
  selectedAnimeTitle,
}) => {
  const currentCollection = JSON.parse(
    localStorage.getItem(`${selectedCollection}`)
  );
  const handleRemove = () => {
    const collectionIndex = currentCollection.findIndex((data) => {
      return data.id === selectedAnimeId;
    });
    if (collectionIndex !== -1) {
      currentCollection.splice(collectionIndex, 1);
      localStorage.setItem(
        `${selectedCollection}`,
        JSON.stringify(currentCollection)
      );
    }
    setOpenRemoveAnimeModal(false);
  };
  return (
    <>
      <ToastContainer />
      <ModalBackground>
        <ModalContainer>
          <TitleCloseBtn>
            <CloseBtn
              onClick={() => {
                setOpenRemoveAnimeModal(false);
              }}
            >
              X
            </CloseBtn>
          </TitleCloseBtn>
          <Title>
            <h2>Are you sure ?</h2>
          </Title>
          <Body>
            <p>
              Do you really want to delete
              <AnimeTitle>{selectedAnimeTitle}</AnimeTitle>
              from collection ?
            </p>
          </Body>
          <Footer>
            <CollectionNoBtn
              onClick={() => {
                setOpenRemoveAnimeModal(false);
              }}
            >
              No
            </CollectionNoBtn>
            <CollectionYesBtn
              onClick={() => {
                handleRemove();
              }}
            >
              Yes
            </CollectionYesBtn>
          </Footer>
        </ModalContainer>
      </ModalBackground>
    </>
  );
};

export default RemoveAnimeModal;
