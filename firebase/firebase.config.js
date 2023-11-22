// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQR7b1j3dFxrtVlMpKJco2k2CAZS0lRy0",
  authDomain: "lab-02-34eea.firebaseapp.com",
  projectId: "lab-02-34eea",
  storageBucket: "lab-02-34eea.appspot.com",
  messagingSenderId: "30387826839",
  appId: "1:30387826839:web:e24b8b1c51ec180c40b9d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);