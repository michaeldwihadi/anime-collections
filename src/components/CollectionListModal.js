import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  max-height: 500px;
  min-height: 375px;
  width: 500px;
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

const TitleContainer = styled.div`
  display: inline-block;
  text-align: center;
`;

const TitleModal = styled.h1`
  padding: 0;
  margin: 10px;
`;

const TitleCloseBtn = styled.button`
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
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

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 90px;
  margin-top: 15px;
`;

const TableDesc = styled.td`
  text-align: left;
  padding-top: 20px;
  padding-left: 8px;
  padding-bottom: 8px;
  padding-right: 8px;
`;

const TableHeader = styled.td`
  border-bottom: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  font-weight: bold;
`;

const TableHeaderButton = styled.td`
  border-bottom: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  font-weight: bold;
`;

const TableDescButton = styled.td`
  padding-top: 20px;
  text-align: left;
  width: 25%;
`;

const AddCollectionBtn = styled.button`
  background-color: #ffffff;
  border: none;
  color: black;
  padding: 4px 32px;
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
    transform: scale(1.02);
    transition: all 0.4s;
  }
`;

const FooterLink = styled(Link)`
  background-color: #ffffff;
  border: none;
  color: black;
  padding: 8px 177px;
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
    transform: scale(1.02);
    transition: all 0.4s;
  }
`;

const LeftBtn = styled.button`
  background-color: #ffffff;
  border: none;
  color: black;
  padding: 6px 22px;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 6px;
  font-weight: bold;
  margin-right: 26rem;
  margin-left: -25px;
`;

const RightBtn = styled.button`
  background-color: #ffffff;
  border: none;
  color: black;
  text-align: center;
  -webkit-text-decoration: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 6px;
  font-weight: bold;
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
