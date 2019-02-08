import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCk6XdYJH-h9hkg2iKoqA-9xYuRIPhbehM",
  authDomain: "catch-of-the-day-stephan.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-stephan.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export.
export { firebaseApp };

// this is a default export
export default base;
