import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJ3kiv4J40DSv5AFtQzk7sQU8MF7ioRnc",
  authDomain: "travel-guru-3d31c.firebaseapp.com",
  projectId: "travel-guru-3d31c",
  storageBucket: "travel-guru-3d31c.appspot.com",
  messagingSenderId: "493990587365",
  appId: "1:493990587365:web:78a5398d2490ffd32c5d0c"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth