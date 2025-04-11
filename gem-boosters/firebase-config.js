// Firebase v9 Modular SDK Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { 
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";
import { 
  getDatabase,
  ref,
  set,
  update,
  onValue,
  push
} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAGqisqJ29rBgyW1-O6pSrxt98aZModmHM",
  authDomain: "gem-boosters.firebaseapp.com",
  databaseURL: "https://gem-boosters-default-rtdb.firebaseio.com",
  projectId: "gem-boosters",
  storageBucket: "gem-boosters.firebasestorage.app",
  messagingSenderId: "910103271106",
  appId: "1:910103271106:web:a6230fd0757fad9fc58d5b",
  measurementId: "G-1GT08W4BWQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const googleProvider = new GoogleAuthProvider();

export { 
  auth,
  database,
  googleProvider,
  ref,
  set,
  update,
  onValue,
  push,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut
};