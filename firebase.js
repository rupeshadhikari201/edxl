// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCX4hkuB6kWpa3Zr_goqm6pcGPpb0gezJU",
    authDomain: "edxl-ec932.firebaseapp.com",
    projectId: "edxl-ec932",
    storageBucket: "edxl-ec932.appspot.com",
    messagingSenderId: "545489077156",
    appId: "1:545489077156:web:2c6e103fb5aa9ba921f731",
    measurementId: "G-V8Z91RPWWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);