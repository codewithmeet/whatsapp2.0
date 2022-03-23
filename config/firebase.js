import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8IwOk2U1TOMGvnRcE2uD3nHr7NW5T2zQ",
  authDomain: "whatsapp20-613ad.firebaseapp.com",
  projectId: "whatsapp20-613ad",
  storageBucket: "whatsapp20-613ad.appspot.com",
  messagingSenderId: "535501162538",
  appId: "1:535501162538:web:7917f9e53b9a6f446f5b53",
  measurementId: "G-JVK5J34H0C",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
