import React, { useEffect } from "react";
import LoadHeader from "./LoadHeader.js";
import useMovieList from "../custom-hooks/useMovieList.js";
import MainContainer from "./MainContainer.js";
import SecondaryContainer from "./SecondaryContainer.js";
import usePopular from "../custom-hooks/usePopular.js";
import useThriller from "../custom-hooks/useThriller.js";
import useTopRatedMovies from "../custom-hooks/useTopRatedMovies.js";
import useUpcomingMovies from "../custom-hooks/useUpcomingMovie.js";
const Browse = () => {
  // Calling the custom hook for fetching the movie data

  useMovieList();
  usePopular();
  useThriller();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <LoadHeader />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
