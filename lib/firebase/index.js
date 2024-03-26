// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASIcK2bBLXszpV6svsZD2F_htuog4Ipxk",
  authDomain: "finance-tracker-3e7d3.firebaseapp.com",
  projectId: "finance-tracker-3e7d3",
  storageBucket: "finance-tracker-3e7d3.appspot.com",
  messagingSenderId: "75629905453",
  appId: "1:75629905453:web:37a69d01fe9f84d4b79aa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {app, db, auth} 