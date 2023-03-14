import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCL3ZDb9hANHjaQn4pEaXfJlvlvA5bu-GM",
  authDomain: "whats-app-clone-7d364.firebaseapp.com",
  databaseURL: "https://whats-app-clone-7d364.firebaseio.com",
  projectId: "whats-app-clone-7d364",
  storageBucket: "whats-app-clone-7d364.appspot.com",
  messagingSenderId: "947417704142",
  appId: "1:947417704142:web:40e50c05a45a11ac9e129f",
  measurementId: "G-LRZ5T2649S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
