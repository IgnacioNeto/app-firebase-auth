import { initializeApp } from "firebase/app";
// Importando recursos da biblioteca de autenticação do firebase
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHPewirB0nO-Q6yErYQHreC8Ph1iPyzvM",
  authDomain: "app-autenticacao-fffa2.firebaseapp.com",
  projectId: "app-autenticacao-fffa2",
  storageBucket: "app-autenticacao-fffa2.appspot.com",
  messagingSenderId: "716466211131",
  appId: "1:716466211131:web:e13a6c67516d925ae40f1e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Exportando os recursos de autenticação da biblioteca
export const auth = getAuth(app);
