import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCNcd9-L13M8K_E48ah5jr16oEs2n4Qi6w",
  authDomain: "crown-db-875d2.firebaseapp.com",
  databaseURL: "https://crown-db-875d2.firebaseio.com",
  projectId: "crown-db-875d2",
  storageBucket: "crown-db-875d2.appspot.com",
  messagingSenderId: "790154211480",
  appId: "1:790154211480:web:81358ab253284ac07660ed",
  measurementId: "G-QSXPPXHL8W",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
