import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9MYbAwnowWTO3ZBb911z1Eg0N8r7-52w",
  authDomain: "blog-app-d7a65.firebaseapp.com",
  projectId: "blog-app-d7a65",
  storageBucket: "blog-app-d7a65.appspot.com",
  messagingSenderId: "838110091007",
  appId: "1:838110091007:web:00aa699dfd85d35b251eca"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth()


export const googleAuth = ()=>{
   let provider = new GoogleAuthProvider()
   return signInWithPopup(auth,provider)
}

export const GoogleLogout = async ()=>{
    return await signOut(auth)
}