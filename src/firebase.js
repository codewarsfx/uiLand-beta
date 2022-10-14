import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import getFirestore from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// firebase config object 
const firebaseConfig = {
    apiKey: "AIzaSyDD90iRq1ZqO3v3lV6G_7307dJUHeeByJ4",
    authDomain: "uiland.firebaseapp.com",
    projectId: "uiland",
    storageBucket: "uiland.appspot.com",
    messagingSenderId: "743569551414",
    appId: "1:743569551414:web:baee6f033928b0fa1de897",
    measurementId: "G-9210JLHTVJ"
  }

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// intialize auth  
export const auth = getAuth(app);

// initialize cloud firestore



// ----------------SIGN IN WITH GOOGLE FUNCTIONALITY----------------------

const googleAuthProvider = new GoogleAuthProvider()

export const signInWithGoogle = () => signInWithPopup(auth, googleAuthProvider)

export const signout = ()=> signOut(auth)

