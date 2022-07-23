import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Firebase configuration

const app = firebase.initializeApp({
    apiKey: "AIzaSyDDw7iZaGMbKYoAs_q7GbqdHhqdVBug1dk",
    authDomain: "agrafes-52218.firebaseapp.com",
    projectId: "agrafes-52218",
    storageBucket: "agrafes-52218.appspot.com",
    messagingSenderId: "656601365003",
    appId: "1:656601365003:web:2410c581f2d28ce037250e" 
});

// Initialize Firebase
export const auth = app.auth();
export default app;