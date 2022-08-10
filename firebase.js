// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "my-twitter-clone-v1.firebaseapp.com",
  projectId: "my-twitter-clone-v1",
  storageBucket: "my-twitter-clone-v1.appspot.com",
  messagingSenderId: "617357190012",
  appId: "1:617357190012:web:067d81e0303db71af5faf9"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp()
const db = getFirestore()
const storage = getStorage()
export { app, db, storage}
