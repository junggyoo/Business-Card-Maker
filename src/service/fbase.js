import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_API_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_API_PROJECT_ID,
  databaseURL: process.env.REACT_APP_API_DATABASE_URL,
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);


export const firebaseAuth = firebaseApp.auth();
export const firebaseDatabase = firebaseApp.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();