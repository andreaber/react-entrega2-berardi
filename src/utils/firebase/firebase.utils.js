import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmh3g-yzHVdy60YRNFfjjFhE4Yx5qiWws",
  authDomain: "urban-kvinde-93fdf.firebaseapp.com",
  projectId: "urban-kvinde-93fdf",
  storageBucket: "urban-kvinde-93fdf.appspot.com",
  messagingSenderId: "563640642905",
  appId: "1:563640642905:web:c4c67bfaf7781d4269b048"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWhitGooglePopup = () => 
  signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => 
  signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (
  userAuth, 
  additionalInformation = {}
) => {
  if(!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  // verifico si existen datos del usuario
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createAt = new Date()
    // si no existen, lo configuro dentro de la db
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
      })
    } catch (err) {
      console.log('error al crear el usuario', err.message)
    }
  }

  // devolver userDocRef
  return userDocRef
} 

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}