// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAbn6hDZn1SV3rZUs3qFPZpgZjB1v7hdJg",
  authDomain: "alai-af9e7.firebaseapp.com",
  projectId: "alai-af9e7",
  storageBucket: "alai-af9e7.appspot.com",
  messagingSenderId: "395573078650",
  appId: "1:395573078650:web:8fac48930470e7447f69c3",
  measurementId: "G-Z7TFCMRCFZ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
