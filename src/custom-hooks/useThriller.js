import React from 'react'
import { useDispatch } from "react-redux";
import  {addThrillerMovie} from "../utils/slice/MovieSlice.js";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Config";

const useThriller = () => {
    const dispatch = useDispatch();
    const fetchThrillerMovie = async() => {
       const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=2", API_OPTIONS);
       const json = await data.json();
      dispatch(addThrillerMovie(json.results));
      
    }
    
     useEffect (()=> {
        fetchThrillerMovie();
     }, []);
    
    return ({})
}

export default useThriller
