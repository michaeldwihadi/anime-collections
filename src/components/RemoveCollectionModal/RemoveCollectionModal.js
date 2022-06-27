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
} from "./Style";

const RemoveCollectionModal = ({
  setOpenRemoveModal,
  selectedCollectionName,
}) => {
  const handleRemove = () => {
    const allAnimeDetails = JSON.parse(localStorage.getItem("allAnimeDetails"));
    const collectionName = JSON.parse(localStorage.getItem("collectionName"));

    if (
      JSON.parse(localStorage.getItem(`${selectedCollectionName}`)) !== null
    ) {
      localStorage.removeItem(`${selectedCollectionName}`);
    }

    const selectedIndex = collectionName.indexOf(selectedCollectionName);
    if (selectedIndex !== -1) {
      collectionName.splice(selectedIndex, 1);
    }

    allAnimeDetails.forEach((element) => {
      const selectedIndex = element.collectionName.indexOf(
        selectedCollectionName
      );
      if (selectedIndex !== -1) {
        allAnimeDetails.splice(selectedIndex, 1);
      }
    });
    localStorage.setItem("allAnimeDetails", JSON.stringify(allAnimeDetails));
    localStorage.setItem("collectionName", JSON.stringify(collectionName));
    setOpenRemoveModal(false);
  };
  return (
    <>
      <ToastContainer />
      <ModalBackground>
        <ModalContainer>
          <TitleCloseBtn>
            <CloseBtn
              onClick={() => {
                setOpenRemoveModal(false);
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
              Do you really want to delete {selectedCollectionName} collection ?
            </p>
          </Body>
          <Footer>
            <CollectionNoBtn
              onClick={() => {
                setOpenRemoveModal(false);
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

export default RemoveCollectionModal;
