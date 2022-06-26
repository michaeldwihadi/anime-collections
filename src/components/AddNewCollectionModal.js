import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
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
  height: 300px;
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
  margin-left: 30px;
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
`;

const CollectionInput = styled.input`
  margin-top: 36px;
  width: 28rem;
  padding: 5px;
  margin-bottom: 35px;
`;

const CollectionSubmitBtn = styled.input`
  background-color: #000000;
  border: none;
  color: white;
  padding: 7px 210px;
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
