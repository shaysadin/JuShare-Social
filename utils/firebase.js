// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA24KOBrLeYQEDUSrX00ZoNgC2Lp6Cw8h0",
  authDomain: "social-app-c3c12.firebaseapp.com",
  projectId: "social-app-c3c12",
  storageBucket: "social-app-c3c12.appspot.com",
  messagingSenderId: "465055275455",
  appId: "1:465055275455:web:928035e1c687044818690a",
  measurementId: "G-H579NJ2CD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;