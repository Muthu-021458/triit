import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCf3MxyNsnvHguhd3fhGTsl8lupyn8mwqU",
  authDomain: "contact-form-226c9.firebaseapp.com",
  projectId: "contact-form-226c9",
  storageBucket: "contact-form-226c9.firebasestorage.app",
  messagingSenderId: "585596302165",
  appId: "1:585596302165:web:71a8f3b431be012d6df5dc",
  measurementId: "G-BJRJBLPSRX"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);