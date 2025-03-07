import { useDispatch } from "react-redux";
import  { addNowPlayingMovies} from "../utils/slice/MovieSlice.js";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Config";

const useMovieList = () => {
    const dispatch = useDispatch();
    const fetchMovieData = async() => {
       const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
       const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    //   console.log(json.results)
    }
    
     useEffect (()=> {
      fetchMovieData();
     }, []);
    
    return ({})
}
export default useMovieList;