import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOxzJzcccFNvO_FBglPQvC4ut5WZiUOuw",
  authDomain: "crwn-clothing-db-737b5.firebaseapp.com",
  projectId: "crwn-clothing-db-737b5",
  storageBucket: "crwn-clothing-db-737b5.appspot.com",
  messagingSenderId: "19142929549",
  appId: "1:19142929549:web:797d8a863b16efbfd346c4",
  measurementId: "G-FDW3H20DX4",
};

const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});



export const auth = getAuth();
export const signInWithGooglePoup = () => signInWithPopup(auth, provider)
export  const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
 const userSnapshot = await getDoc(userDocRef);
 console.log(userSnapshot.exists());
  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();
     try{
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt
        });
     } catch (error) {
    console.log('error creating the user', error.message)
    }
  } 
}