import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAysYvDM8gQjiovVpiBvQ1G906Cbx2LuC4",
    authDomain: "cdti-chat.firebaseapp.com",
    projectId: "cdti-chat",
    storageBucket: "cdti-chat.appspot.com",
    messagingSenderId: "624233649875",
    appId: "1:624233649875:web:5c21aa254187f03dede626"
  };

// const firebaseConfig = {
//     apiKey: "AIzaSyBBCHDx4AgDlfRZUMwPeg3hkdX5233cbyc",
//     authDomain: "testdb-2e100.firebaseapp.com",
//     projectId: "testdb-2e100",
//     storageBucket: "testdb-2e100.appspot.com",
//     messagingSenderId: "756176322370",
//     appId: "1:756176322370:web:5d7c2aa707a80b0f2452db"
//   };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);