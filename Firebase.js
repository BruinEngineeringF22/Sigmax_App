// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZUUSHZtJAQjyxmRxSBaFUpV9XqbTnD68",
  authDomain: "sigmax-b24c0.firebaseapp.com",
  projectId: "sigmax-b24c0",
  storageBucket: "sigmax-b24c0.appspot.com",
  messagingSenderId: "870291888932",
  appId: "1:870291888932:web:a5e74d315bc372c0e171b1",
  measurementId: "G-ZND138E0B5",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export { auth };
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);