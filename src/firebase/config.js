
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";



const firebaseConfig = {

    apiKey: "AIzaSyBdwGdnM1Q2nOiCrrjeo30QTt8dE17RKb4",
    authDomain: "cine-e9272.firebaseapp.com",
    projectId: "cine-e9272",
    storageBucket: "cine-e9272.appspot.com",
    messagingSenderId: "109189670150",
    appId: "1:109189670150:web:2423b803e904b51aa82a87"

};


export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)