import { useState } from "react"
import { initializeApp } from "firebase/app"
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  OAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBtIDenmQrganQnZpFVYRivCUHsS9THdi4",
  authDomain: "authentication-personalweb.firebaseapp.com",
  projectId: "authentication-personalweb",
  storageBucket: "authentication-personalweb.appspot.com",
  messagingSenderId: "916900439774",
  appId: "1:916900439774:web:3440c7b2ec12b28733044f",
  measurementId: "G-CBWSYX77VC",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
