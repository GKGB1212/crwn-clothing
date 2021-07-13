import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyCEfQ5Y8iFjwDGfnxyRMNXrMTLx666nHtk",
    authDomain: "crwn-db-7a63c.firebaseapp.com",
    projectId: "crwn-db-7a63c",
    storageBucket: "crwn-db-7a63c.appspot.com",
    messagingSenderId: "1013973426994",
    appId: "1:1013973426994:web:ce59a4ed75a535d0c42d2b",
    measurementId: "G-NWDVQBLQCE"
}

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=> auth.signInWithPopup(provider);

export default firebase;