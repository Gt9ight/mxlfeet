import { initializeApp } from 'firebase/app';
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch,  query, getDocs} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDUwSQ8RlDzcwPY5Eq2wdmpLKRHqSw9NHw",
  authDomain: "plm-fleet.firebaseapp.com",
  projectId: "plm-fleet",
  storageBucket: "plm-fleet.appspot.com",
  messagingSenderId: "581262701095",
  appId: "1:581262701095:web:9cebef65a6c3d3f6f45402"
};

  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth()
  export const storage = getStorage()
