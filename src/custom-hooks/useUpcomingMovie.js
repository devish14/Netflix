import React from 'react'
import { useDispatch } from "react-redux";
import  {addUpcomingMovie} from "../utils/slice/MovieSlice.js";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Config";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const fetchUpcomingMovie = async() => {
       const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2", API_OPTIONS);
       const json = await data.json();
      dispatch(addUpcomingMovie(json.results));
    }
    
     useEffect (()=> {
        fetchUpcomingMovie();
     }, []);
    
    return ({})
}

export default useUpcomingMovies
