import React from "react";
import { API_OPTIONS } from "../utils/Config";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/slice/MovieSlice.js";


const useTrailer = (movieid) => {
  const dispatch = useDispatch();
  const playMovieTrailer = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieid}/videos`,
        API_OPTIONS
      );
      const json = await data.json();
      const filteredData = json.results.filter(
        (e) => e.name === "Official Trailer"
      );
      //console.log(filteredData);

      filteredData.length > 0 ? filteredData[0] : json.results[0];
      dispatch(addTrailerVideo(filteredData));
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  useEffect(() => {
    playMovieTrailer();
  }, []);
  return <div></div>;
};

export default useTrailer;
