// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhUh8l2Z0cKDciIuZZg0BkkwouPNL5ouA",
  authDomain: "mini-proj-sem5.firebaseapp.com",
  projectId: "mini-proj-sem5",
  storageBucket: "mini-proj-sem5.appspot.com",
  messagingSenderId: "777462199357",
  appId: "1:777462199357:web:151f4f189bfdd70bcf2654"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);