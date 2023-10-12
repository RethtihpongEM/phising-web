// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs,getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFvUHqChbALaE-HXgPfHFbrOR_ixUSfB8",
  authDomain: "sandbox-448be.firebaseapp.com",
  projectId: "sandbox-448be",
  storageBucket: "sandbox-448be.appspot.com",
  messagingSenderId: "672027347150",
  appId: "1:672027347150:web:249c6d5ab5840d4119289f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Cloud Firestore
const db = getFirestore(app)

//collection ref
const colRef = collection(db,'users')

export {db,colRef}