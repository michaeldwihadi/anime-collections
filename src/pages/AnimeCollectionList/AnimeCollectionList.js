import React, { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import RemoveCollectionModal from "../../components/RemoveCollectionModal/RemoveCollectionModal";
import AddNewCollectionModal from "../../components/AddNewCollectionModal/AddNewCollectionModal";

import {
  Table,
  TableDesc,
  TableHeader,
  RemoveCollectionBtn,
  AnimeImg,
  AnimeList,
  AnimeLink,
  TableImage,
  TableRow,
  AnimeListContainer,
  NewCollectionBtn,
} from "./Style";

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
      <Table
        marginBottom={
          allCollectionData === null || allCollectionData.length <= 1
            ? "500px"
            : "180px"
        }
      >
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
