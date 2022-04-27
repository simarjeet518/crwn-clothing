import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHXwhhJYNGL7A0rOEyCz2NV5eSpxdAzxU",
  authDomain: "crwn-db-de521.firebaseapp.com",
  projectId: "crwn-db-de521",
  storageBucket: "crwn-db-de521.appspot.com",
  messagingSenderId: "621171049083",
  appId: "1:621171049083:web:501c2a24f8bdfb2f4fd8de",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.getCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
