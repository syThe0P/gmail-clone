import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBanpFsX6qyq47EmFNxTX7B5WUycCUv5wc",
    authDomain: "clone-20b55.firebaseapp.com",
    projectId: "clone-20b55",
    storageBucket: "clone-20b55.appspot.com",
    messagingSenderId: "101058772543",
    appId: "1:101058772543:web:47f850ae5db8381495c28a",
    measurementId: "G-EQTTBSGMVR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};