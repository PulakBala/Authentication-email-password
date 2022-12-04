// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAIP2ZEqYSg0gwLFxmCeEATR4QKMQwTUA",
  authDomain: "email-password-auth-bae71.firebaseapp.com",
  projectId: "email-password-auth-bae71",
  storageBucket: "email-password-auth-bae71.appspot.com",
  messagingSenderId: "960241180540",
  appId: "1:960241180540:web:c72e51980aa53f2f450ef9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;