// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZrKSTFJ1j_e4VHWLeYalVfwGvT1u1_xc",
  authDomain: "web0325-cc4b1.firebaseapp.com",
  databaseURL: "https://web0325-cc4b1-default-rtdb.firebaseio.com",
  projectId: "web0325-cc4b1",
  storageBucket: "web0325-cc4b1.firebasestorage.app",
  messagingSenderId: "450979109962",
  appId: "1:450979109962:web:62924d79594e8babd39ab3",
  measurementId: "G-YH06HEWH72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db=getFirestore(app)
const storage = getStorage(app);

export { storage,app,db };