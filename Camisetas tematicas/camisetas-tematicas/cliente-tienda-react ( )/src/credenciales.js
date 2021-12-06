// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC998mXsDGy8sU-0TsGBGmoAH0ll0opPac",
  authDomain: "camisetas-tematicas.firebaseapp.com",
  projectId: "camisetas-tematicas",
  storageBucket: "camisetas-tematicas.appspot.com",
  messagingSenderId: "255785345837",
  appId: "1:255785345837:web:091c00cb8e3bbc9a9ce9a4",
  measurementId: "G-1XVXYY86YD"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
