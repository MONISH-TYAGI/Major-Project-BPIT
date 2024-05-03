// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSoEdT5XcG3O9WLI8GkF5hWKTgrid_C6E",
  authDomain: "tradinglearningsystem-c0be4.firebaseapp.com",
  projectId: "tradinglearningsystem-c0be4",
  storageBucket: "tradinglearningsystem-c0be4.appspot.com",
  messagingSenderId: "803907277995",
  appId: "1:803907277995:web:20a15c00ba6c4d26fb93ee",
  measurementId: "G-4TV14XBKSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
export { auth, storage, db };