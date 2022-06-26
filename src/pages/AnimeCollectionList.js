import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RemoveCollectionModal from "../components/RemoveCollectionModal";
import AddNewCollectionModal from "../components/AddNewCollectionModal";

const Table = styled.table`
  border-collapse: collapse;
  width: 95%;
  margin-bottom: 50px;
  margin-top: 15px;
  margin-left: 50px;
  margin-bottom: 80px;
`;

const TableDesc = styled.td`
  text-align: left;
  padding-top: 20px;
  padding-left: 8px;
  padding-bottom: 20px;
  padding-right: 8px;
  border-bottom: 1px solid #dddddd;
`;

const TableHeader = styled.td`
  border-bottom: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  font-weight: bold;
`;

const RemoveCollectionBtn = styled.button`
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

const AnimeImg = styled.img`
  width: 70%;
  box-shadow: 0 0 20px -5px rgb(0 0 0 / 25%);
  border-radius: 12px;
`;

const AnimeList = styled.li`
  list-style: none;
`;

const AnimeLink = styled(Link)`
  text-decoration: none;
`;

const TableImage = styled.td`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 40px;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #dddddd;
`;

const AnimeListContainer = styled.ul`
  text-align: center;
`;

const NewCollectionBtn = styled.button`
  background-color: #000000;
  border: none;
  color: white;
  padding: 12px 33px;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  cursor: pointer;
  border-radius: 3px;
  float: right;
  margin-top: 80px;
  margin-bottom: 2px;
  display: block;
  font-weight: 600;
  border: 1px solid black;
  margin-right: 45px;
`;

const AnimeCollectionList = () => {
  const [openRemoveModal, setOpenRemoveModal] = useState(false);
  const [collectionName, setCollectionName] = useState("");
  const [addNewModalOpen, setAddNewModalOpen] = useState(false);
  const allCollectionName = JSON.parse(localStorage.getItem("collectionName"));
  let allCollectionData = [];

  if (allCollectionName !== null) {
    allCollectionName.forEach((data) => {
      const animeData = JSON.parse(localStorage.getItem(`${data}`)) || [];
      const newAnimeData = [];

      if (animeData) {
        animeData.forEach((test3) => {
          newAnimeData.push({
            id: test3.id,
            title: test3.title,
            image: test3.image,
          });
        });
      }

      allCollectionData.push({
        collectionName: data,
        anime: newAnimeData,
      });
    });
    localStorage.setItem("allAnimeDetails", JSON.stringify(allCollectionData));
  }

  const removeCollection = (collectionName) => {
    setCollectionName(collectionName);
    setOpenRemoveModal(true);
  };
  return (
    <>
      {addNewModalOpen && (
        <AddNewCollectionModal setAddNewModalOpen={setAddNewModalOpen} />
      )}
      {openRemoveModal && (
        <RemoveCollectionModal
          setOpenRemoveModal={setOpenRemoveModal}
          selectedCollectionName={collectionName}
        />
      )}
      <Navbar />
      <NewCollectionBtn onClick={() => setAddNewModalOpen(true)}>
        Add New Collection
      </NewCollectionBtn>
      <Table>
        <tr>
          <TableHeader>Collection Name</TableHeader>
          <TableHeader>Anime List</TableHeader>
          <TableHeader></TableHeader>
        </tr>
        {allCollectionData !== null &&
          allCollectionData.map((data) => {
            return (
              <>
                <TableRow>
                  <TableDesc>{data.collectionName}</TableDesc>
                  <TableImage>
                    {data.anime &&
                      data.anime.map((anime) => {
                        return (
                          <AnimeListContainer>
                            <AnimeImg
                              src={anime.image}
                              alt={anime.title}
                            ></AnimeImg>
                            <AnimeList>
                              <AnimeLink
                                to="/collection"
                                state={{
                                  selectedCollection: `${data.collectionName}`,
                                }}
                              >
                                {anime.title}
                              </AnimeLink>
                            </AnimeList>
                          </AnimeListContainer>
                        );
                      })}
                  </TableImage>
                  <TableDesc>
                    <RemoveCollectionBtn
                      onClick={() => removeCollection(data.collectionName)}
                    >
                      Remove
                    </RemoveCollectionBtn>
                  </TableDesc>
                </TableRow>
              </>
            );
          })}
      </Table>
      <Footer />
    </>
  );
};

export default AnimeCollectionList;
