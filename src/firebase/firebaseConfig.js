import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCTD--6d8wMj4IIUpqvqCznj56lgtv-5T0",
  authDomain: "journal-app-paho.firebaseapp.com",
  databaseURL: "https://journal-app-paho.firebaseio.com",
  projectId: "journal-app-paho",
  storageBucket: "journal-app-paho.appspot.com",
  messagingSenderId: "371855806618",
  appId: "1:371855806618:web:abe3842d04353fd28f4f23"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
};
