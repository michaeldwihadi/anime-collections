import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  ModalBackground,
  ModalContainer,
  Title,
  TitleCloseBtn,
  CloseBtn,
  Body,
  Footer,
  CollectionInput,
  CollectionSubmitBtn,
} from "./Style";

const EditCollectionNameModal = ({
  setEditCollectionModalOpen,
  selectedCollectionName,
  newSelectedCollectionName,
}) => {
  const [values, setValues] = useState({
    name: selectedCollectionName,
  });

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

    const currentCollection = JSON.parse(
      localStorage.getItem(`${selectedCollectionName}`) || "[]"
    );
    const collectionName = JSON.parse(
      localStorage.getItem("collectionName") || "[]"
    );
    const newCollectionName = [...collectionName];
    localStorage.removeItem(`${selectedCollectionName}`);
    localStorage.setItem(values.name, JSON.stringify(currentCollection));

    for (const item of newCollectionName) {
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

      const collectionIndex = item.indexOf(newCollectionName);

      if (collectionIndex !== -1) {
        collectionName.splice(collectionIndex, 1);
        localStorage.setItem("collectionName", JSON.stringify(collectionName));
      }
    }
    collectionName.push(values.name);
    localStorage.setItem("collectionName", JSON.stringify(collectionName));
    newSelectedCollectionName(values.name);
    setValues({ name: "" });
    setEditCollectionModalOpen(false);
  };

  const handleOnChangeInput = (event) => {
    setValues({ name: event.target.value });
  };
  return (
    <>
      <ToastContainer />
      <ModalBackground>
        <ModalContainer>
          <div>
            <TitleCloseBtn>
              <CloseBtn
                onClick={() => {
                  setEditCollectionModalOpen(false);
                }}
              >
                X
              </CloseBtn>
            </TitleCloseBtn>
          </div>
          <div>
            <Title>
              <h1>Edit Collection Name :</h1>
            </Title>
          </div>

          <Body>
            <form onSubmit={(event) => handleSubmit(event)}>
              <label>
                <CollectionInput
                  onChange={handleOnChangeInput}
                  type="teTableDesct"
                  name="name"
                  required={true}
                  value={values.name}
                />
              </label>
              <CollectionSubmitBtn
                type="submit"
                value="Submit"
                onChange={(e) => setValues(e.target.value)}
              />
            </form>
          </Body>
          <Footer></Footer>
        </ModalContainer>
      </ModalBackground>
    </>
  );
};

export default EditCollectionNameModal;
