// config.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // add
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCihOAxO8BYzwC_IpsVpMnUXB2F-FrvGmg",
    authDomain: "hotel-437a8.firebaseapp.com",
    projectId: "hotel-437a8",
    storageBucket: "hotel-437a8.firebasestorage.app",
    messagingSenderId: "880347971594",
    appId: "1:880347971594:web:dd96c4eb68d4006a1ddff3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // add
