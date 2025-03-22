import React from 'react';
import {IMAGE_CDN_URL} from "../utils/config";

const MovieCards = (props) => {
  const {imageUrl} = props;
  return (
    <div className="flex-shrink-0 w-40">
      <img className='w-full h-auto object-cover' src={IMAGE_CDN_URL + imageUrl} alt=''/>
    </div>
  )
}

export default MovieCards
