import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAe28di8hTV75iBhMcnS21_JuYCIScppog",
  authDomain: "all-nexus.firebaseapp.com",
  projectId: "all-nexus",
  storageBucket: "all-nexus.appspot.com",
  messagingSenderId: "803422527828",
  appId: "1:803422527828:web:76dd01c990376d079ae8c1",
  measurementId: "G-83XE2J808Y",
});

export const fireDatabase = firebase.firestore(app);
export const auth = app.auth();

export default app;
