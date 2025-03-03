import React, { useState } from 'react';
import Header from './Header';
import { NETFLIX_BACKGROUND_LOGO } from '../utils/config';

const Login = () => {

const [signIn, setIsSignIn] = useState(true);

  const changeSignUp = () => {
    setIsSignIn(!signIn);
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={NETFLIX_BACKGROUND_LOGO} className='' />
      </div>
      <form className='relative p-10 bg-black/80 top-[90px] text-white max-w-md mx-auto rounded-lg ' color='white'>
        <div className='text-[rgb(255,255,255)] mb-3 font-bold text-3xl'>{signIn ? "Sign In" : "Sign Up"}</div>
       {!signIn && ( <input type='text' placeholder='Name' className='text-[rgb(255,255,255)] font-medium border-1 w-90 border-[rgb(118,118,118)]  pl-2 text-xl py-3 my-2'/>)}
       {!signIn && ( <input type='text' placeholder='Phone' className='text-[rgb(255,255,255)] font-medium border-1 w-90 border-[rgb(118,118,118)]  pl-2 text-xl py-3 my-2'/>)}
        <input type='text' placeholder='Email' className='text-[rgb(255,255,255)] font-medium border-1 w-90 border-[rgb(118,118,118)]  pl-2 text-xl py-3 my-2'/>
        <input type='password' placeholder='Password' className='text-[rgb(255,255,255)] font-medium pl-2 w-90 border-1 border-[rgb(118,118,118)] text-xl py-3 my-2'/>
       <div className='bg-[rgb(229,9,20)] text-center text-[rgb(255,255,255)] font-bold mt-3 p-2'>
       <button >{signIn ? "Sign In" : "Sign Up"}</button>
       </div>
       <div className='text-[rgba(255,255,255,0.7)] mt-3 p-2'> {signIn ? "New to Netflix ?" : "Already registered ! "} <span className='text-[rgb(255,255,255)] font-bold cursor-pointer' onClick={changeSignUp}> {signIn ? "Sign Up Now" : "Sign In Now"}  </span></div>
      </form>
    </div>
  )
}

export default Login
