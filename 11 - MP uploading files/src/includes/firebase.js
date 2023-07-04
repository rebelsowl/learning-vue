import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCtkHJnMm-eKMOkL9n2SPL3tAjAYD-3QOY",
  authDomain: "music-a4a42.firebaseapp.com",
  projectId: "music-a4a42",
  storageBucket: "music-a4a42.appspot.com",
  messagingSenderId: "987267522999",
  appId: "1:987267522999:web:4de7ea53eabb59d6db8832",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");

export { auth, db, usersCollection, storage, songsCollection };
