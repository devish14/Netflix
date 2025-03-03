import React from 'react';
import { NETFLIX_LOGO } from '../utils/config';

const Header = () => {
  return (
    <div className='absolute z-10 top-8 left-25 w-40 h-20 bg-gradient-to-b from-black' >
      <img className='' src={NETFLIX_LOGO} />
    </div>
  )
}

export default Header
