import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqEvzYTfoI5nRrDI3rxFmKy1UhmL39ia0",
  authDomain: "cdti-chat-3d21b.firebaseapp.com",
  projectId: "cdti-chat-3d21b",
  storageBucket: "cdti-chat-3d21b.appspot.com",
  messagingSenderId: "174271839471",
  appId: "1:174271839471:web:cbd01e45aa339d6260af1a",
  measurementId: "G-BPYPM23QV4"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);