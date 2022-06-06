import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBSjOtLUm-zAGoR6ECBM5SeYJxoVG75FXM",
  authDomain: "react-auth-76d0e.firebaseapp.com",
  projectId: "react-auth-76d0e",
  storageBucket: "react-auth-76d0e.appspot.com",
  messagingSenderId: "1086981812388",
  appId: "1:1086981812388:web:9729386796e5ff42c17631",
  measurementId: "G-Y730DQTQWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
export { auth, provider, app }
export { getFirestore }

// export default getFirestore();

// const analytics = getAnalytics(app);