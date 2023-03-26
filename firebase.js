// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvfQgdnGiukJp7q_xWMKNnzL9oFmhCGK8",
  authDomain: "nepalcan-51589.firebaseapp.com",
  projectId: "nepalcan-51589",
  storageBucket: "nepalcan-51589.appspot.com",
  messagingSenderId: "29905166905",
  appId: "1:29905166905:web:36ca972046ad462f17a3e8",
  measurementId: "G-YZFMLE9F90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
