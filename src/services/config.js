// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "recordland-9b548.firebaseapp.com",
  projectId: "recordland-9b548",
  storageBucket: "recordland-9b548.appspot.com",
  messagingSenderId: "204894875860",
  appId: "1:204894875860:web:c7931e33a6831f78354b41",
  measurementId: "G-S8DJB9RXGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)