import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'




const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_API_AUTH_DOMAIN ,
  databaseURL:process.env.REACT_APP_API_DATABASE_URL ,
  projectId:process.env.REACT_APP_API_PROJECT_ID ,
  storageBucket:process.env.REACT_APP_API_STORAGE_BUCKET ,
  messagingSenderId:process.env.REACT_APP_API_MESSAGING_SENDER_ID ,
  appId:process.env.REACT_APP_API_APP_ID 
 
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

