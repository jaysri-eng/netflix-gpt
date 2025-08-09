// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlfSxIYNwS_hgD99ZqJV9Bsn8RpFG52nY",
    authDomain: "netflixgpt-cce53.firebaseapp.com",
    projectId: "netflixgpt-cce53",
    storageBucket: "netflixgpt-cce53.firebasestorage.app",
    messagingSenderId: "762769097131",
    appId: "1:762769097131:web:bbe2c09b54daf7559e52ee",
    measurementId: "G-NVGZ5B8NNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);