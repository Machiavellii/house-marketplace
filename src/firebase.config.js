import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy2MnG8X3V5dvxgdxSKMo9bPj0aCwHvf0",
  authDomain: "house-marketplace-app-6337b.firebaseapp.com",
  projectId: "house-marketplace-app-6337b",
  storageBucket: "house-marketplace-app-6337b.appspot.com",
  messagingSenderId: "673666492965",
  appId: "1:673666492965:web:7e91eb3b168ecf48c82dcc",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
