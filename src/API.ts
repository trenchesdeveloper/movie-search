import { SEARCH_BASE_URL } from "./config";

// Types
export type Movie = {
  Year: Date;
  Type: string;
  imdbID: string;
  Title: string;
  Poster: string;
};

const apiSettings = {
  fetchMovies: async (searchTerm: string): Promise<Movie[]> => {
    const endpoint: string = searchTerm && `${SEARCH_BASE_URL}${searchTerm}`;

    const { Search } = await (await fetch(endpoint)).json();
    return Search;
  },
};
export default apiSettings;
