import React from 'react';
import { NETFLIX_LOGO } from '../utils/Config';

const Header = () => {
  return (
    <div className='absolute z-10 w-full h-20 bg-gradient-to-b from-transparent to-black' >
    <img className='w-40 h-full object-contain' src={NETFLIX_LOGO} />
  </div>

  );
}

export default Header
