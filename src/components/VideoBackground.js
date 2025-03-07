import React from "react";
import {  useSelector } from "react-redux";
import useTrailer from "../custom-hooks/useTrailer"

const VideoBackground = (props) => {
  const { movieid } = props;

  const videoSelector = useSelector((store)=>store.movies.trailerVideo);
  useTrailer(movieid);

   //console.log(videoSelector);

  if(!videoSelector) return;

  return (
    <div className="">  
      <iframe
      className="w-screen aspect-video"
        src= {"https://www.youtube.com/embed/"+videoSelector[0]?.key+"?si=RbWDNn7SZzzvxr72&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
