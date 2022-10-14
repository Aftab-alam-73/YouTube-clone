// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB0F9vCN4585JnKqy3H6GLSHqkpgiujyN8",
  authDomain: "fir-5ef0e.firebaseapp.com",
  projectId: "fir-5ef0e",
  storageBucket: "fir-5ef0e.appspot.com",
  messagingSenderId: "892698101430",
  appId: "1:892698101430:web:349f1ce3691f77c1a8c817"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const provider=new GoogleAuthProvider();
export default app;