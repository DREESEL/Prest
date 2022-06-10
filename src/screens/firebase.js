// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/compat/firestore';
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCdgSJUx41rOMmUJPDNoS5wnqeALwSdmCc",
    authDomain: "wexic-be5b2.firebaseapp.com",
    projectId: "wexic-be5b2",
    storageBucket: "wexic-be5b2.appspot.com",
    messagingSenderId: "79589969722",
    appId: "1:79589969722:web:aa0d6894294bbe07934a03",
    measurementId: "G-YG3WQS1422"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
export { auth }



