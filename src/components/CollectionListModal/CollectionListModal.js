import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  ModalBackground,
  ModalContainer,
  TitleContainer,
  TitleModal,
  TitleCloseBtn,
  Body,
  Footer,
  Table,
  TableDesc,
  TableHeader,
  TableHeaderButton,
  TableDescButton,
  AddCollectionBtn,
  FooterLink,
  LeftBtn,
  RightBtn,
  CollectionInput,
  CollectionSubmitBtn,
} from "./Style";

const CollectionModal = ({ setOpenModal, animeTitle, animeId, BannerImg }) => {
  const [values, setValues] = useState({
    name: "",
  });
  const [addAnimeCollection, setaddAnimeCollection] = useState(true);
  const [isCollectionAvailable, setIsCollectionAvailable] = useState(false);
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("collectionName"));
    if (items && addAnimeCollection) {
      items.slice(0, 5);
      const newCollection = [...items];
      setCollections(newCollection);
      setIsCollectionAvailable(true);
    }
  }, [isCollectionAvailable, addAnimeCollection]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (values.name.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/)) {
      toast.warn("No Special Character Allowed", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      return;
    }

    const items = JSON.parse(localStorage.getItem("collectionName") || "[]");

    for (const item of items) {
      if (item === values.name) {
        toast.info("Collection Name Already Exist", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
        return;
      }
    }

    items.push(values.name);
    localStorage.setItem("collectionName", JSON.stringify(items));
    setIsCollectionAvailable(true);
    setaddAnimeCollection(true);
    setValues({ name: "" });
    toast.success("Success", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
    return;
  };

  const handleOnChangeInput = (event) => {
    setValues({ name: event.target.value });
  };

  const addToCollection = (collection) => {
    const CollectionData = JSON.parse(localStorage.getItem(`${collection}`))
      ? JSON.parse(localStorage.getItem(`${collection}`))
      : [];
    const newAnimeDetails = {
      id: animeId,
      title: animeTitle,
      image: BannerImg,
    };

    if (CollectionData.length > 0) {
      for (const data of CollectionData) {
        if (data !== null && data.id === animeId) {
          toast.info("Anime Already On Collection", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
          });
          return;
        }
      }
    }

    if (
      CollectionData.length === 0 &&
      CollectionData !== null &&
      CollectionData.id === animeId
    ) {
      toast.info("Anime Already On Collection", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      return;
    }

    CollectionData.push(newAnimeDetails);
    localStorage.setItem(`${collection}`, JSON.stringify(CollectionData));
    toast.success("Added to Collection", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };

  const addNewCollection = (collection) => {
    if (collection === "Return") {
      setaddAnimeCollection(true);
      setIsCollectionAvailable(true);
      return;
    }
    setaddAnimeCollection(false);
    setIsCollectionAvailable(false);
  };

  return (
    <>
      <ToastContainer />
      <ModalBackground>
        <ModalContainer>
          <TitleCloseBtn>
            <LeftBtn
              onClick={() => {
                addNewCollection(addAnimeCollection ? "Add" : "Return");
              }}
            >
              {addAnimeCollection ? "Add" : "Return"}
            </LeftBtn>
            <RightBtn
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </RightBtn>
          </TitleCloseBtn>
          <TitleContainer>
            <TitleModal>
              {isCollectionAvailable || addAnimeCollection
                ? "My Collections"
                : "New Collection Name: "}
            </TitleModal>
          </TitleContainer>
          <Body>
            {isCollectionAvailable || addAnimeCollection ? (
              <Table>
                <tr>
                  <TableHeader>Collection Name</TableHeader>
                  <TableHeaderButton></TableHeaderButton>
                </tr>
                {collections.map((collection) => {
                  return (
                    <tr>
                      <TableDesc>{collection}</TableDesc>
                      <TableDescButton>
                        <AddCollectionBtn
                          onClick={() => addToCollection(collection)}
                        >
                          Add
                        </AddCollectionBtn>
                      </TableDescButton>
                    </tr>
                  );
                })}
              </Table>
            ) : (
              <form onSubmit={handleSubmit}>
                <div>
                  <CollectionInput
                    maxLength={50}
                    onChange={handleOnChangeInput}
                    type="text"
                    name="name"
                    required={true}
                    value={values.name}
                  />
                </div>
                <CollectionSubmitBtn
                  type="submit"
                  value="Submit"
                  onChange={(e) => setValues(e.target.value)}
                />
              </form>
            )}
          </Body>
          <Footer>
            {collections.length > 0 &&
              (isCollectionAvailable || addAnimeCollection) && (
                <FooterLink to="/list">Show All Collections</FooterLink>
              )}
          </Footer>
        </ModalContainer>
      </ModalBackground>
    </>
  );
};

export default CollectionModal;
