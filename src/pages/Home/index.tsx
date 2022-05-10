import React from "react";
import { Movie } from "../../API";
import Grid from "../../components/Grid";
import SearchBar from "../../components/SearchBar";
import Spinner from "../../components/Spinner";
import Thumb from "../../components/Thumb";
import { useHomeFetch } from "../../hooks/useHomeFetch";
import NoImage from "../../images/no_image.jpg";

const Home: React.FC = () => {
  const { movies, isLoading, isError, searchQuery, setSearchQuery } =
    useHomeFetch();

  const handlerFn = (query: string) => setSearchQuery(query);

  if (isError) return <div>Something went wrong ...</div>;

  return (
    <>
      <SearchBar setSearchTerm={handlerFn} />
      <Grid header={searchQuery && "Search Result"}>
        {movies &&
          movies.map((movie: Movie, index) => (
            <Thumb
              data-testId={`movie-item-${index}`}
              key={movie.imdbID}
              image={movie.Poster === "N/A" ? NoImage : movie.Poster}
            />
          ))}
      </Grid>

      {isLoading && <Spinner />}
    </>
  );
};

export default Home;
