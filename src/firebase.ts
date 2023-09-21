// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxcnHpMHwex-u_AX_l3E3brbe1CilSs68",
  authDomain: "car-gallery-d58fd.firebaseapp.com",
  projectId: "car-gallery-d58fd",
  storageBucket: "car-gallery-d58fd.appspot.com",
  messagingSenderId: "324476213441",
  appId: "1:324476213441:web:b59ea375e4787ab2f5dc40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
