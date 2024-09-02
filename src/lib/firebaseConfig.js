// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import 'dotenv/config';
import { getStorage } from "@firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCguKk8AhqjCdcrAPAthnfKa2iTfLmIJ9s",
//   authDomain: "francesco-luise-fisioterapista.firebaseapp.com",
//   projectId: "francesco-luise-fisioterapista",
//   storageBucket: "francesco-luise-fisioterapista.appspot.com",
//   messagingSenderId: "96312342338",
//   appId: "1:96312342338:web:718a2da0be3316e04dbadb"
// };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);

export { storage, app, auth };