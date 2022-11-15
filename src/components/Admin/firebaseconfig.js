
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase(){

const firebaseConfig = {
  apiKey: "AIzaSyA-gOIBpSiPoN6MYJ7p9RWvzo_YJvOGJ_k",
  authDomain: "qudient-employee.firebaseapp.com",
  projectId: "qudient-employee",
  storageBucket: "qudient-employee.appspot.com",
  messagingSenderId: "497682178015",
  appId: "1:497682178015:web:c37d397a78225aeee4ee6a"
};

const app = initializeApp(firebaseConfig);
return getDatabase(app);

}
export default StartFirebase;