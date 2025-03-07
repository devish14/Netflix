import React, { useEffect } from "react";

import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/slice/UserSlice";
import { useNavigate } from "react-router";
const Body = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calling this api only once on the component is rendered
  //onAuthStateChanged is used to get the details on the user when sign in or sign out happens what ever the user does

  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        // console.log(user)
        const { uid, email, displayName, phoneNumber } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            phoneNumber: phoneNumber,
          })
        );
         navigate("/browse");
      
        // ...
      } else {
        // User is signed out
        dispatch(removeUser);
        navigate("/");
  
      }
    });

    // Unsubscribe from the listener when the component unmounts

    return() => unsubscribe();
  }, []);

  return (
  <></>
  );
};

export default Body;
