import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: "video-sharing-app-f6cfa.firebaseapp.com",
  projectId: "video-sharing-app-f6cfa",
  storageBucket: "video-sharing-app-f6cfa.appspot.com",
  messagingSenderId: "38773754253",
  appId: "1:38773754253:web:16d07056c77cc6b9a0d5c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
