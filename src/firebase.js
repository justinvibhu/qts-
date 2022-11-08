
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-gOIBpSiPoN6MYJ7p9RWvzo_YJvOGJ_k",
  authDomain: "qudient-employee.firebaseapp.com",
  projectId: "qudient-employee",
  storageBucket: "qudient-employee.appspot.com",
  messagingSenderId: "497682178015",
  appId: "1:497682178015:web:c37d397a78225aeee4ee6a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };