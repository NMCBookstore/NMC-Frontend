import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVa5ujWbB8pnQCgSCnv1LcBu7JrNV86G0",
  authDomain: "nmcauth.firebaseapp.com",
  projectId: "nmcauth",
  storageBucket: "nmcauth.appspot.com",
  messagingSenderId: "979079735719",
  appId: "1:979079735719:web:9a1208fbb4bbc4ce38ae82",
  measurementId: "G-J7ML9VTHCV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  console.log("this is called");
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      alert(err);
      console.log(err);
    });
};
