// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLcYMn7St-KObnnEyBSUKIU2UwwWMtOdk",
    authDomain: "final-auth-fe9ae.firebaseapp.com",
    projectId: "final-auth-fe9ae",
    storageBucket: "final-auth-fe9ae.firebasestorage.app",
    messagingSenderId: "749085012951",
    appId: "1:749085012951:web:6ae111d8d3e73958c41192"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);