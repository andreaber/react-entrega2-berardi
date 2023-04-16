import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUFlQ4cp7JiY6yyVOSquB7HNkd1gZBDHQ",
  authDomain: "urban-kvinde.firebaseapp.com",
  projectId: "urban-kvinde",
  storageBucket: "urban-kvinde.appspot.com",
  messagingSenderId: "60588618938",
  appId: "1:60588618938:web:2194450754efc1b3ee7e83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()