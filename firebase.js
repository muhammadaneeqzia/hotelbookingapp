import { initializeApp } from 'firebase/app'; // add
import { getAuth } from 'firebase/auth'; // add
import { getFirestore } from 'firebase/firestore'; 

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyCihOAxO8BYzwC_IpsVpMnUXB2F-FrvGmg",
    authDomain: "hotel-437a8.firebaseapp.com",
    projectId: "hotel-437a8",
    storageBucket: "hotel-437a8.firebasestorage.app",
    messagingSenderId: "880347971594",
    appId: "1:880347971594:web:dd96c4eb68d4006a1ddff3"
};

// Initialize Firebase with your configuration object
const app = initializeApp(firebaseConfig);

// Get the Firebase authentication and Firestore database instances
const auth = getAuth(app); // add
const database = getFirestore(app); // add

// Export the Firebase authentication and Firestore database instances
export { auth, database }; //add
