import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClIcc4_-bL6_vu0G2sDdDQBtE255Q-UTE",
  authDomain: "blogsite-e490e.firebaseapp.com",
  projectId: "blogsite-e490e",
  storageBucket: "blogsite-e490e.appspot.com",
  messagingSenderId: "349317229127",
  appId: "1:349317229127:web:cd309643e5b5fea9935f62"
};

// const app = initializeApp(firebaseConfig);
// export const db = getDatabase(app);
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export const auth = getAuth(app);
export default app;
export { db }