import React from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUcnzrCdHgH5nHSIq55X5tj9PLRex6Aj8",
  authDomain: "tugerente-3eb3f.firebaseapp.com",
  projectId: "tugerente-3eb3f",
  storageBucket: "tugerente-3eb3f.appspot.com",
  messagingSenderId: "499066372169",
  appId: "1:499066372169:web:93cbfbb16b9e8e13407f98"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");
createRoot(rootElement).render(<App />);
