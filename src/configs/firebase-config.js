// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInAnonymously } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB0LqLiWgMztaqwNZzsRBwx8Vqb1R15hQ",
  authDomain: "blogfinals-eb774.firebaseapp.com",
  projectId: "blogfinals-eb774",
  storageBucket: "blogfinals-eb774.appspot.com",
  messagingSenderId: "407352946967",
  appId: "1:407352946967:web:f59a4cd07a62db89e00752",
  measurementId: "G-VYSBBRBD03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
