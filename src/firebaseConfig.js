import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD_HV-aXNYlXQB5l-1df0APBIr4qWHHkhI",
    authDomain: "tavetodolist-c65ef.firebaseapp.com",
    projectId: "tavetodolist-c65ef",
    storageBucket: "tavetodolist-c65ef.appspot.com",
    messagingSenderId: "631043404206",
    appId: "1:631043404206:web:e211198f12ee9a9cc3183f",
    measurementId: "G-Q8W03KGMH9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db};
