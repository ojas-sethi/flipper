// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3WPFJ_DzJtPvfdxcms6MPRiZyIPvD498",
  authDomain: "flipper-aa3b1.firebaseapp.com",
  projectId: "flipper-aa3b1",
  storageBucket: "flipper-aa3b1.appspot.com",
  messagingSenderId: "1059280802862",
  appId: "1:1059280802862:web:c8370e21e62ef4d6983bbf",
  measurementId: "G-1RFGZ3718V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
