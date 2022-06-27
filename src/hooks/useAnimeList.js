import { useQuery, gql } from "@apollo/client";

export const GET_ALL_ANIME_LIST = gql`
  query getAnimeList($currentPage: Int) {
    Page(page: $currentPage, perPage: 10) {
      media {
        id
        title {
          romaji
        }
        coverImage {
          large
          medium
          color
        }
      }
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
    }
  }
`;

export const useAnimeList = (currentPage) => {
  const { error, data, loading } = useQuery(GET_ALL_ANIME_LIST, {
    variables: {
      currentPage,
    },
  });

  return {
    data,
    error,
    loading,
  };
};
