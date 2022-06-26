import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "@emotion/styled";

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
`;

const ModalContainer = styled.div`
  width: 500px;
  height: 180px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  display: inline-block;
  text-align: center;
  margin-top: 10px;
`;

const Title = styled.div`
  display: inline-block;
  text-align: center;
  margin-left: 20px;
`;

const TitleCloseBtn = styled.button`
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
  float: right;
`;

const Body = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  text-align: center;
`;

const Footer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const CloseBtn = styled.button`
  background-color: #ffffff;
  border: none;
  color: black;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 6px;
  font-weight: bold;
`;

const CollectionNoBtn = styled.button`
  background-color: #000000;
  border: none;
  color: white;
  padding: 7px 110px;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  cursor: pointer;
  border-radius: 3px;
  margin: auto;
  display: block;
  font-weight: 600;
  border: 1px solid black;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const CollectionYesBtn = styled.button`
  background-color: white;
  border: none;
  color: black;
  padding: 7px 110px;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  cursor: pointer;
  border-radius: 3px;
  margin: auto;
  display: block;
  font-weight: 600;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
  }
`;

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
