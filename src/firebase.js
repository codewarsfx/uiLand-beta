import { initializeApp } from "firebase/app";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { getFirestore, collection, getDocs,getDoc,doc ,setDoc, query, where,deleteDoc,onSnapshot} from "firebase/firestore";
import { prepareData } from "./utils/FirebaseUtilities";


// firebase config object
const firebaseConfig = {
	apiKey: "AIzaSyDD90iRq1ZqO3v3lV6G_7307dJUHeeByJ4",
	authDomain: "uiland.firebaseapp.com",
	projectId: "uiland",
	storageBucket: "uiland.appspot.com",
	messagingSenderId: "743569551414",
	appId: "1:743569551414:web:baee6f033928b0fa1de897",
	measurementId: "G-9210JLHTVJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// intialize auth
export const auth = getAuth(app);

// initialize cloud firestore

// ----------------SIGN IN WITH GOOGLE FUNCTIONALITY----------------------

const googleAuthProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, googleAuthProvider);

export const signout = () => signOut(auth);

// --------------------------FIRESTORE QUERIES----------------------------------

const db = getFirestore(app);

// read screens data
export const getScreensData = async () => {
	const querySnapshot = await getDocs(collection(db, "Screens"));
     return prepareData(querySnapshot.docs)
};


export const getindividualScreenData=async (id)=>{
	const querySnapshot=  await getDoc(doc(db,"Screens",id))
	const result = querySnapshot.data()
	return result
   }

   
   export const addBookMark=async(user,  id)=>{
    await setDoc(doc(db, "Screens",id, "Bookmark",user), {
		id: user
	  });

   }

   export const deleteBookMark=async(user,  id)=>{
  await deleteDoc(doc(db, "Screens",id, "Bookmark",user), {
		id: user
	  });
	 
   }

   export const queryBookMarks = async(user,id)=>{
	// const q = query(collection(db, "Screens",id, "Bookmark"), where("id", "==", user));
	// console.log(q)
	// const querySnapshot = await getDocs(q);
	// console.log(querySnapshot)
	
	// querySnapshot.forEach((doc) => {
	// 	// doc.data() is never undefined for query doc snapshots
	// 	console.log(doc.id, " => ", doc.data());
	// })



	// const querySnapshots = query(collection(db, "Screens",id,"Bookmark"), where("id", "==", user));
	// console.log(querySnapshots)
	// const q=await getDocs(querySnapshots)
	// console.log(q)
	// onSnapshot(q, (querySnapshot) => { 
	// 	let result=[]
	// 	console.log(querySnapshot)
	// 	querySnapshot.forEach((doc) => {
	//  result.push(doc.id)
	// });
	// return result
	// })

      let result=[]
		const querySnapshot = await getDocs(collection(db, "Screens",id,"Bookmark"));
		querySnapshot.forEach((doc) => {
		 result.push(doc.id)
		});
		return result
   }

   export const getItemsByQuery = async (filterby) => {
	const citiesRef = collection(db, "Screens");

    const q = query(citiesRef, where("Category", "==", filterby));

	const querySnapshot = await getDocs(q);
    return prepareData(querySnapshot.docs)
}