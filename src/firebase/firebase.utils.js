import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyArLWExomcZyuVb6DlTXSrpE0WB77egDxc",
    authDomain: "crwn-clothing-eb2b6.firebaseapp.com",
    databaseURL: "https://crwn-clothing-eb2b6.firebaseio.com",
    projectId: "crwn-clothing-eb2b6",
    storageBucket: "crwn-clothing-eb2b6.appspot.com",
    messagingSenderId: "601772612616",
    appId: "1:601772612616:web:79da32e70fede09a8145bd",
    measurementId: "G-79ZZWEZKPX"
  };

  firebase.initializeApp(firebaseConfig);
 

  export const auth = firebase.auth();
  export const firestore =firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
 

  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle =() => auth.signInWithPopup(provider);


  export default firebase;