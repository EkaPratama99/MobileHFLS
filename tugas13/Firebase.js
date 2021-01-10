import firebase from  'firebase';
import 'firebase/firestore';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyAMQCUfrtCbFtm4npYEL-E-hq68tdgVwTg",
    authDomain: "ekasuar-e230d.firebaseapp.com",
    projectId: "ekasuar-e230d",
    storageBucket: "ekasuar-e230d.appspot.com",
    messagingSenderId: "960028156264",
    appId: "1:960028156264:web:1212d01c14d4d58d82b6dd"
  };
  // Initialize Firebaseb 
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
  const bd = firebase.database()
  
  export default {firebase,
  db, bd }