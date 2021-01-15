import firebase from 'firebase';
 import firebaseConfig from '../firebase-config'

 firebase.initializeApp(firebaseConfig);

 const auth = firebase.auth;
 const database = firebase.database();
 
 export {
     auth,
     database
 }