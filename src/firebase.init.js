// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWLvbQeeN0MHgQvQSnyeD8yAu1Pb-pSNw",
  authDomain: "integration-auth-f749d.firebaseapp.com",
  projectId: "integration-auth-f749d",
  storageBucket: "integration-auth-f749d.firebasestorage.app",
  messagingSenderId: "558468452963",
  appId: "1:558468452963:web:af0acd652e2791a26e9e56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);