import { getApps, initializeApp ,getApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE3f7eJJ5apGqCGVc9nOt1KO2B9hjIgpk",
  authDomain: "prepwise-e3e1c.firebaseapp.com",
  projectId: "prepwise-e3e1c",
  storageBucket: "prepwise-e3e1c.firebasestorage.app",
  messagingSenderId: "669432160914",
  appId: "1:669432160914:web:c38f6edf6cd9131ed83c4b",
  measurementId: "G-L5CS5K16RE",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
