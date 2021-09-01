import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyCYYv0NEyqtC02Im7R8fNoOH5eqQH__EL4",
  authDomain: "slack-2-4e895.firebaseapp.com",
  projectId: "slack-2-4e895",
  storageBucket: "slack-2-4e895.appspot.com",
  messagingSenderId: "509987062968",
  appId: "1:509987062968:web:b4a6caacea1568437ae04d",
  measurementId: "G-2B22G5EYNP"
};

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;