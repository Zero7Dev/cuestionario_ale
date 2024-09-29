// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX5R0FEXEXVmieVwBvSnS3amsb7chFZa0",
  authDomain: "amor-ed8f1.firebaseapp.com",
  projectId: "amor-ed8f1",
  storageBucket: "amor-ed8f1.appspot.com",
  messagingSenderId: "703006984568",
  appId: "1:703006984568:web:92ab4ad7bc89a4bfb1608d",
  measurementId: "G-CVJQ9GSK9G"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



// Inicializa Firebase
const apps = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(apps);

export { db };
