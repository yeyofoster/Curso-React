// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8s1NN-sZhR1z-pGUQQ1sK_hW56sR8eJI",
    authDomain: "react-cursos-7c69a.firebaseapp.com",
    projectId: "react-cursos-7c69a",
    storageBucket: "react-cursos-7c69a.appspot.com",
    messagingSenderId: "50671553826",
    appId: "1:50671553826:web:bb7e0fba953739e2f1697b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);