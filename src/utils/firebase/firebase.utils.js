import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc

} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnNUOyiwNUU0ZkiOfiegNnlYgnwLryS4A",
  authDomain: "crwn-clothing-db-a7aec.firebaseapp.com",
  projectId: "crwn-clothing-db-a7aec",
  storageBucket: "crwn-clothing-db-a7aec.appspot.com",
  messagingSenderId:
   "666743720787",
  appId: "1:666743720787:web:2e628ac06079cdf6b6efa6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);
  const userSnapshot =  await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt
    })

  }catch (error) {
    console.log('error creating users', error.message)
  }
}
return userDocRef;


}



