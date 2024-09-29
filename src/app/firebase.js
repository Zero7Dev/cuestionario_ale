// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let app; // Declarar app fuera de la función

if (typeof window !== "undefined") { // Verificar si estamos en el cliente
  // Tu configuración de Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyDX5R0FEXEXVmieVwBvSnS3amsb7chFZa0",
    authDomain: "amor-ed8f1.firebaseapp.com",
    projectId: "amor-ed8f1",
    storageBucket: "amor-ed8f1.appspot.com",
    messagingSenderId: "703006984568",
    appId: "1:703006984568:web:92ab4ad7bc89a4bfb1608d",
    measurementId: "G-CVJQ9GSK9G"
  };
  


  // Inicializa Firebase
  app = initializeApp(firebaseConfig);
}

const db = app ? getFirestore(app) : null; // Solo obtener Firestore si app fue inicializada

export { db };
