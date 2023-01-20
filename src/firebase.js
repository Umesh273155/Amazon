// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDrAEQLTiFeNBRV2oKJhMTz6h33BrJM5BQ",
    authDomain: "clone-c7f48.firebaseapp.com",
    projectId: "clone-c7f48",
    storageBucket: "clone-c7f48.appspot.com",
    messagingSenderId: "159544108213",
    appId: "1:159544108213:web:a492b8f8682dee75c48afc",
    measurementId: "G-E1HYL7JDHS"
  };
  const app=initializeApp(firebaseConfig);
  export const auth=getAuth(app);
  