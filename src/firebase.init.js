// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC577CpP8BTBGR9c8X6ri3UgHjsezuEEzM",
  authDomain: "explore-emal-password-auth.firebaseapp.com",
  projectId: "explore-emal-password-auth",
  storageBucket: "explore-emal-password-auth.firebasestorage.app",
  messagingSenderId: "1089751403147",
  appId: "1:1089751403147:web:d867713f105bfc1357628e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);