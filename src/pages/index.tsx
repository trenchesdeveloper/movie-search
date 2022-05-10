import React from "react";
import SearchBar from "../components/SearchBar";
import { useHomeFetch } from "../hooks/useHomeFetch";

//components

const Home: React.FC = () => {
  const { movies, isLoading, isError, searchQuery, setSearchQuery } =
    useHomeFetch();

  const handlerFn = (query: string) => setSearchQuery(query);

  if (isError) return <div>Something went wrong ...</div>;

  return (
    <>
      <SearchBar setSearchTerm={handlerFn} />
    </>
  );
};

export default Home;
