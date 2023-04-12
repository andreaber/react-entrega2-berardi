import MOCK_DATA from "../data/MOCK_DATA.json" assert { type: "json" };
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUFlQ4cp7JiY6yyVOSquB7HNkd1gZBDHQ",
  authDomain: "urban-kvinde.firebaseapp.com",
  projectId: "urban-kvinde",
  storageBucket: "urban-kvinde.appspot.com",
  messagingSenderId: "60588618938",
  appId: "1:60588618938:web:2194450754efc1b3ee7e83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const productosRef = collection(db, "productos")

MOCK_DATA.forEach((item) => {
        delete item.id

        addDoc(productosRef, item)
})
