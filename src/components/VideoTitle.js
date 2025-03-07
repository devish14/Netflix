import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="w-[530px] px-8 pt-6 absolute top-40">
      <h1 className="text-5xl font-bold text-white">{title}</h1>
      <p className="text-md pt-5 font-medium text-white">{overview}</p>
      <div className="pt-4 flex justify-start gap-3">
        <button className="px-10 py-2  text-xl font-bold bg-white text-black rounded-sm hover:bg-white opacity-75">
          {" "}
          <FontAwesomeIcon className="mr-1" icon="play" /> Play
        </button>
        <button className="px-8 py-2 text-xl font-bold bg-[rgba(109,109,110,0.7)] text-white rounded-sm">
          <FontAwesomeIcon className="mr-1" icon="circle-exclamation" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
