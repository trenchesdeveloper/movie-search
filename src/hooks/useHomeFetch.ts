import { useState, useEffect } from "react";
//API
import API, { Movie } from "../API";

export const useHomeFetch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchMovies = async (searchQuery = "") => {
    try {
      setIsError(false);
      setIsLoading(true);

      const movies = await API.fetchMovies(searchQuery);
      console.log(movies);

      setMovies(movies);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  // Load movies
  useEffect(() => {
    if (searchQuery) {
      fetchMovies(searchQuery);
    }
  }, [searchQuery]);

  return {
    movies,
    isLoading,
    isError,
    searchQuery,
    setSearchQuery,
  }; // es6 syntax
};
