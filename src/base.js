import Rebase from "re-base";
import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCD2_xAkRPbvjsM7RjzT1IDnZwcXgQ8DRM",
  authDomain: "very-hot-burgers-e8b48.firebaseapp.com",
  databaseURL: "https://very-hot-burgers-e8b48-default-rtdb.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;