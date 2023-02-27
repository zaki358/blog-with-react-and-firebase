import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgbNzWeoM1RpvBnh2QJJ6Lbu3SHAp6XUE",
  authDomain: "blog-4984f.firebaseapp.com",
  projectId: "blog-4984f",
  storageBucket: "blog-4984f.appspot.com",
  messagingSenderId: "558247374855",
  appId: "1:558247374855:web:03b3ac4bb766e36f6b3aa2",
};

const app = initializeApp(firebaseConfig);

//認証の初期化
const auth = getAuth(app);
//
const provider = new GoogleAuthProvider();
//データベースの初期化
const db = getFirestore(app);

export { auth, provider, db };
