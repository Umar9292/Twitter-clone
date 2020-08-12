import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAdHDQyGDDfldGnJuN1yG7zWkm51SBRirc",
    authDomain: "twitter-clone-5a66f.firebaseapp.com",
    databaseURL: "https://twitter-clone-5a66f.firebaseio.com",
    projectId: "twitter-clone-5a66f",
    storageBucket: "twitter-clone-5a66f.appspot.com",
    messagingSenderId: "7738632941",
    appId: "1:7738632941:web:f79695cfc95ea5f0ca7ae4",
    measurementId: "G-Y1H2NRWH6B"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);

 const db = firebaseApp.firestore();

 export default db;