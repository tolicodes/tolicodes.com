import firebase from "firebase";
// Required for side-effects
require("firebase/firestore");
const firebaseConfig = require("../../firebaseConfig.json");
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
