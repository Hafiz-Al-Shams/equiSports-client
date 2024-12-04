// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgHMNIZwWd-0uMbPe0n-Eun5SX1F5vOxQ",
    authDomain: "equisports-project.firebaseapp.com",
    projectId: "equisports-project",
    storageBucket: "equisports-project.firebasestorage.app",
    messagingSenderId: "204762404412",
    appId: "1:204762404412:web:9db2c501ebcce2d14b9539"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);