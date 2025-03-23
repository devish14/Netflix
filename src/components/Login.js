import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import Header from "./Header";
import { NETFLIX_BACKGROUND_LOGO } from "../utils/Config.js";
import LoginValidation from "../utils/validations/LoginValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { addUser } from "../utils/slice/UserSlice.js";
import { useSelector } from "react-redux";

const Login = () => {
  const [signIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState();
  
  // Access the user state from Redux store
  const user = useSelector((state) => state.user);
  console.log(user, "user"); // Log the user state to the console

  const dispatch = useDispatch();

  const changeSignUp = () => {
    setIsSignIn(!signIn);
  };

  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();

  const handleSubmit = () => {
    // console.log(emailRef.current.value, "email");
    // console.log(passwordRef.current.value, "pass")

    const message = LoginValidation(
      emailRef.current.value,
      passwordRef.current.value
    );
    setErrorMsg(message);

    if (message) return;

    if (!signIn) {
      // Writing a firebase code here for sign up

      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          // Update the user profile it should get the (auth.currentUser) so no we have to get the current user here

          //   console.log(user, "Sign up data is successfully done");
          //  console.log(auth, "auth update")

          //Here the store is not updating the user profile so on load to upload it we are  dispatching the action again here

          updateProfile(auth.currentUser, {
            displayName: nameRef.current.value,
          })
            .then(() => {
              const { uid, email, displayName, phoneNumber } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  phoneNumber: phoneNumber,
                })
              );
            })
            .catch((error) => {
              setErrorMsg(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user, "Sign In data is successfully done");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute ">
      <img src={NETFLIX_BACKGROUND_LOGO} className="" />
      </div>
      <div className="absolute top-[100px] left-0 right-0 mx-auto">
      <form
        className=" p-10 bg-black/80 text-white max-w-md mx-auto rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="text-[rgb(255,255,255)] mb-3 font-bold text-3xl">
          {signIn ? "Sign In" : "Sign Up"}
        </div>
        {!signIn && (
          <input
            type="text"
            placeholder="Name"
            ref={nameRef}
            className="text-[rgb(255,255,255)] font-medium border-1 w-90 border-[rgb(118,118,118)]  pl-2 text-xl py-3 my-2"
          />
        )}
        {!signIn && (
          <input
            type="text"
            placeholder="Phone"
            ref={phoneRef}
            className="text-[rgb(255,255,255)] font-medium border-1 w-90 border-[rgb(118,118,118)]  pl-2 text-xl py-3 my-2"
          />
        )}
        <input
          type="text"
          ref={emailRef}
          placeholder="Email"
          className="text-[rgb(255,255,255)] font-medium border-1 w-90 border-[rgb(118,118,118)]  pl-2 text-xl py-3 my-2"
        />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Password"
          className="text-[rgb(255,255,255)] font-medium pl-2 w-90 border-1 border-[rgb(118,118,118)] text-xl py-3 my-2"
        />
        <p className="font-bold text-[rgb(229,9,20)] text-xl">{errorMsg}</p>
        <div className="bg-[rgb(229,9,20)] text-center text-[rgb(255,255,255)] font-bold mt-3 p-2">
          <button onClick={handleSubmit}>
            {signIn ? "Sign In" : "Sign Up"}
          </button>
        </div>
        <div className="text-[rgba(255,255,255,0.7)] mt-3 p-2">
          {" "}
          {signIn ? "New to Netflix ?" : "Already registered ! "}{" "}
          <span
            className="text-[rgb(255,255,255)] font-bold cursor-pointer"
            onClick={changeSignUp}
          >
            {" "}
            {signIn ? "Sign Up Now" : "Sign In Now"}{" "}
          </span>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Login;
