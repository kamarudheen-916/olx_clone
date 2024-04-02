import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBn01FDdb2O5jZJ4x0KqNYmYz8XKotttx4",
    authDomain: "olx-clone-bb7cb.firebaseapp.com",
    projectId: "olx-clone-bb7cb",
    storageBucket: "olx-clone-bb7cb.appspot.com",
    messagingSenderId: "820462570498",
    appId: "1:820462570498:web:226163f6e6659e9133ab1b",
    measurementId: "G-RTYTFS3X4Q"
  };

export default   firebase.initializeApp(firebaseConfig)