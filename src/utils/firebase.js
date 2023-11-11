// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE1zt-bQmPa0X_0VitTkrE7XQ63AgVCFM",
  authDomain: "my-netflix-26944.firebaseapp.com",
  projectId: "my-netflix-26944",
  storageBucket: "my-netflix-26944.appspot.com",
  messagingSenderId: "354374598698",
  appId: "1:354374598698:web:c31b36b9df3c97cfa28353",
  measurementId: "G-0WL5T2FHZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
