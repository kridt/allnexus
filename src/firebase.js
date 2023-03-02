import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({});

export const fireDatabase = firebase.firestore(app);

export const auth = app.auth();

export default app;
