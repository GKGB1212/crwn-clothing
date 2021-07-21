import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Firebase config
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

export const createUserProfileDocument= async (userAuth, additionalData)=>{
    if(!userAuth) return;

    const userRef=firestore.doc(`users/${userAuth.uid}`);

    const snapShot=await userRef.get();

    console.log(snapShot);

    //kiểm tra với id này thì người dùng đã tồn tại trong collection users chưa, nếu chưa thì thêm vào
    if(!snapShot.exists){
        const {displayName,email}=userAuth;
        const createAt=new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        }catch(err){
            config.log('error creating user '+ err.message);
        }
    }

    return userRef;
}

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=> auth.signInWithPopup(provider);

export default firebase;