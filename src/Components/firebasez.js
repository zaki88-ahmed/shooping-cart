// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyBMSLMGqbYC6Ggg-r8kVEV2ZgUeCoOFEWA",
    // authDomain: "first-50d9a.firebaseapp.com",
    // projectId: "first-50d9a",
    // storageBucket: "first-50d9a.appspot.com",
    // messagingSenderId: "755762318621",
    // appId: "1:755762318621:web:d0ae71c29a38d607dde5f4",
    // measurementId: "G-RTXH5SDF66"


    apiKey: "AIzaSyBMSLMGqbYC6Ggg-r8kVEV2ZgUeCoOFEWA",
    authDomain: "first-50d9a.firebaseapp.com",
    projectId: "first-50d9a",
    storageBucket: "first-50d9a.appspot.com",
    messagingSenderId: "755762318621",
    appId: "1:755762318621:web:9f00146348ab3185dde5f4",
    measurementId: "G-CK0X4TXPS7"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;