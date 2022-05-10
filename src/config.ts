// Configuration for OMDB API
// Read more about the API here: https://www.omdbapi.com

const API_URL: string = "https://www.omdbapi.com/";
const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;

const SEARCH_BASE_URL: string = `${API_URL}?apikey=${API_KEY}&s=`;



export {
  SEARCH_BASE_URL,
  API_URL,
  API_KEY,
};
