import { useQuery, gql } from "@apollo/client";

const GET_ANIME_DETAILS = gql`
  query getAnimeDetails($animeId: Int) {
    Media(id: $animeId) {
      id
      title {
        romaji
      }
      coverImage {
        large
        medium
        color
      }
      description
      episodes
      genres
      status
    }
  }
`;

export const useAnimeDetails = (animeId) => {
  const { error, data, loading } = useQuery(GET_ANIME_DETAILS, {
    variables: {
      animeId,
    },
  });

  return {
    data,
    error,
    loading,
  };
};
