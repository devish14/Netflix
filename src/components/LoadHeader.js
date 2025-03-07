import React from "react";
import { NETFLIX_LOGO, SIGN_OUT_LOGO } from "../utils/Config";
import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
const LoadHeader = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="flex justify-between p-2 bg-black items-center">
      <div className="z-10 w-35 h-20 bg-gradient-to-b from-black">
        <img className="" src={NETFLIX_LOGO} />
      </div>
      <div className="flex items-center ">
        <img className="mr-1 w-7" src={SIGN_OUT_LOGO} />
        <button
          onClick={handleSignOut}
          className="font-bold text-white text-lg p-2"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default LoadHeader;
