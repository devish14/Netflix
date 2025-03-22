import React from 'react'
import { useDispatch } from "react-redux";
import  {addPopularMovies} from "../utils/slice/MovieSlice.js";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Config";

const usePopular = () => {
    const dispatch = useDispatch();
    const fetchPopularMovie = async() => {
       const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS);
       const json = await data.json();
      dispatch(addPopularMovies(json.results));
    }
    
     useEffect (()=> {
        fetchPopularMovie();
     }, []);
    
    return ({})
}

export default usePopular;
