// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0P8KXIxKEzaz5xvUvWRbeC0P94dD2XRM",
  authDomain: "chat-f2250.firebaseapp.com",
  projectId: "chat-f2250",
  storageBucket: "chat-f2250.appspot.com",
  messagingSenderId: "540605289086",
  appId: "1:540605289086:web:00c101760bdc53df4f7e2f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage();
export const db = getFirestore(app);