import React, { useEffect } from 'react';
import LoadHeader from './LoadHeader.js';
import  useMovieList from "../custom-hooks/useMovieList.js";
import MainContainer from './MainContainer.js';
import SecondaryContainer from './SecondaryContainer.js';
const Browse = () => {

  // Calling the custom hook for fetching the movie data
  
useMovieList();
  return (
    <div>
      <LoadHeader />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse;
