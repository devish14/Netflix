// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHHpelQmogUfg27uq8Wn25t994wzB7xI0",
  authDomain: "netflixgpt-36a80.firebaseapp.com",
  projectId: "netflixgpt-36a80",
  storageBucket: "netflixgpt-36a80.firebasestorage.app",
  messagingSenderId: "983423129268",
  appId: "1:983423129268:web:31c9b207e186a84b7729e1",
  measurementId: "G-2P555F05EF"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
export const auth = getAuth();
