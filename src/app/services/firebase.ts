
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCKrv1mfMU0hpL2c5eZh5pP8-rBwdKcMfM",
  authDomain: "moretasks-acdba.firebaseapp.com",
  projectId: "moretasks-acdba",
  storageBucket: "moretasks-acdba.firebasestorage.app",
  messagingSenderId: "1309161981",
  appId: "1:1309161981:web:e22d745301a3019b418194"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export {db}
export {auth}