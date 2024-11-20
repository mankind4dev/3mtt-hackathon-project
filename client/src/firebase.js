// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfTwpjXtHsB6_DkMf3mYrZbxxnD2h5etY",
  authDomain: "real-castle.firebaseapp.com",
  databaseURL: "https://real-castle-default-rtdb.firebaseio.com",
  projectId: "real-castle",
  storageBucket: "real-castle.appspot.com",
  messagingSenderId: "765755101330",
  appId: "1:765755101330:web:89bf2c9305a8a4c80ed64b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);