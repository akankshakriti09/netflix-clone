import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { generatePath } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyBnnAcaxx8SHagZkRfmZTxuOxwdVDrdblg",
  authDomain: "react-netflix-clone-50af0.firebaseapp.com",
  projectId: "react-netflix-clone-50af0",
  storageBucket: "react-netflix-clone-50af0.appspot.com",
  messagingSenderId: "425774684793",
  appId: "1:425774684793:web:95554393561ccec46912a8",
  measurementId: "G-CHQ6PF9BD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth =  getAuth(app);
