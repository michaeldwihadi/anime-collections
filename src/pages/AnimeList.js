import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import { useAnimeList } from "../hooks/useAnimeList";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 60px;
  margin-bottom: 20px;
`;

const ListContainer = styled(Link)`
  width: 300px;
  margin-right: 100px;
  margin-left: 61px;
  margin-bottom: 40px;
  margin-top: 25px;
  border-radius: 12px;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: black;
  text-align: center;
  border: 1px solid #efefef;
  box-shadow: 0 0 20px -5px rgb(0 0 0 / 25%);
  &:hover {
    transform: scale(1.02);
    transition: all 0.4s;
  }
`;

const AnimeImage = styled.img`
  width: 300px;
  height: 425px;
  border-radius: 12px 12px 0px 0px;
  object-fit: cover;
`;

const AnimeTitle = styled.p`
  width: 260px;
  margin-left: 14px;
`;

const AnimeList = () => {
  // const [posts, setPosts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(10);
  const { error, data, loading } = useAnimeList(1);

  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Container>
            {data.Page.media.map((media) => {
              return (
                <ListContainer
                  to="/details"
                  state={{
                    id: `${media.id}`,
                    title: `${media.title.romaji}`,
                    image: `${media.coverImage.large}`,
                  }}
                >
                  <AnimeImage
                    src={media.coverImage.large}
                    alt={media.title.romaji}
                  />
                  <AnimeTitle>{media.title.romaji}</AnimeTitle>
                </ListContainer>
              );
            })}
          </Container>
          {/* <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          /> */}
          <Footer />
        </>
      )}
    </>
  );
};

export default AnimeList;
