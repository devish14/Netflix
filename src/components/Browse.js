import React, { useEffect } from "react";
import LoadHeader from "./LoadHeader.js";
import useMovieList from "../custom-hooks/useMovieList.js";
import MainContainer from "./MainContainer.js";
import SecondaryContainer from "./SecondaryContainer.js";
import usePopular from "../custom-hooks/usePopular.js";
import useThriller from "../custom-hooks/useThriller.js";
import useTopRatedMovies from "../custom-hooks/useTopRatedMovies.js";
import useUpcomingMovies from "../custom-hooks/useUpcomingMovie.js";
import { useDispatch } from "react-redux";
import {fetchDramaMovies,nowPlayingSeriesList} from "../utils/slice/MovieSlice"

const Browse = () => {
  // Calling the custom hook for fetching the movie data
const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchDramaMovies());  // Dispatch the thunk to fetch data
  dispatch(nowPlayingSeriesList()) // Dispatches the action action to trigger the watcher saga
}, [dispatch]);

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
