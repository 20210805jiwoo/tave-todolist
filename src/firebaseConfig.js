// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_HV-aXNYlXQB5l-1df0APBIr4qWHHkhI",
    authDomain: "tavetodolist-c65ef.firebaseapp.com",
    projectId: "tavetodolist-c65ef",
    storageBucket: "tavetodolist-c65ef.appspot.com",
    messagingSenderId: "631043404206",
    appId: "1:631043404206:web:e211198f12ee9a9cc3183f",
    measurementId: "G-Q8W03KGMH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
