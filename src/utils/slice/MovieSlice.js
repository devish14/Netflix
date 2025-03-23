import { createSlice } from "@reduxjs/toolkit";
import { API_OPTIONS } from "../config.js";
const MovieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovie: null,
    topRated: null,
    upcomingMovie: null,
    thrillerMovie: null,
    dramaMovie: null,
    fetchMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovie = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.upcomingMovie = action.payload;
    },
    addThrillerMovie: (state, action) => {
      state.thrillerMovie = action.payload;
    },
    addDramaMovies: (state, action) => {
      state.dramaMovie = action.payload;
    },

    // This is handled by Redux-Saga
    setFetchedMovies: (state, action) => {
        state.fetchMovies = action.payload;  // Store the fetched data
      },

    nowPlayingSeriesList: (state) => {
        // You can keep it empty because saga handles the API call
      },
  },
});

export const {
    setFetchedMovies,
  nowPlayingSeriesList,
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addThrillerMovie,
  addUpcomingMovie,
  addTopRated,
  addDramaMovies,
} = MovieSlice.actions;

// Create Thunks

export const fetchDramaMovies = () => async (dispatch) => {
  try {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=4",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addDramaMovies(json.results));
  } catch (error) {
    console.log("Data is not fetched it has few errors", error);
  }
};

export default MovieSlice.reducer;
