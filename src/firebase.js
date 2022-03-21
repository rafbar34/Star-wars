import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAP2roJsIfg8avfZXUa-XIraS_nPvYkUmQ",
  authDomain: "starwars-d3e92.firebaseapp.com",
  projectId: "starwars-d3e92",
  storageBucket: "starwars-d3e92.appspot.com",
  messagingSenderId: "25414404085",
  appId: "1:25414404085:web:2b28c851d434d5846c02bc",
  measurementId: "G-HC67BRNS9L"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

