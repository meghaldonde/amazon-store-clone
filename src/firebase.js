import firebase from "firebase";

const firebaseConfig = {
    apiKey: "",
    authDomain: "amaz-cl-meg.firebaseapp.com",
    databaseURL: "https://amaz-cl-meg.firebaseio.com",
    projectId: "amaz-cl-meg",
    storageBucket: "amaz-cl-meg.appspot.com",
    messagingSenderId: "599631963432",
    appId: "1:599631963432:web:fb34d536f419e16534dc1d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };