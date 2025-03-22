import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name:"movies",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null,
        popularMovie: null,
        topRated:null,
        upcomingMovie:null,
        thrillerMovie:null,
    },
    reducers : {
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo : (state,action) => {
            state.trailerVideo = action.payload
        },
        addPopularMovies : (state,action) => {
            state.popularMovie = action.payload
        },
        addTopRated :(state,action)=> {
            state.topRated = action.payload
        },
        addUpcomingMovie :(state,action)=> {
            state.upcomingMovie = action.payload
        },
        addThrillerMovie :(state,action)=> {
            state.thrillerMovie = action.payload
        }
    }
});

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addThrillerMovie,addUpcomingMovie,addTopRated } = MovieSlice.actions;
export default MovieSlice.reducer;