// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBtBsc0dZUMV_4UCfw8sQx-OHA6Dya2n8",
  authDomain: "re-audio-app.firebaseapp.com",
  projectId: "re-audio-app",
  storageBucket: "re-audio-app.appspot.com",
  messagingSenderId: "809530605126",
  appId: "1:809530605126:web:6f7d1f3fc49e3ba4971447",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
