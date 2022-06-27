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

const AddNewCollectionModal = ({ setAddNewModalOpen }) => {
  const [values, setValues] = useState({
    name: "",
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
    setValues({ name: "" });
    setAddNewModalOpen(false);
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
                  setAddNewModalOpen(false);
                }}
              >
                X
              </CloseBtn>
            </TitleCloseBtn>
          </div>
          <div>
            <Title>
              <h1>New Collection Name :</h1>
            </Title>
          </div>

          <Body>
            <form onSubmit={handleSubmit}>
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

export default AddNewCollectionModal;
