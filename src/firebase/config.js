import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBQNkxnlbyG0zDzUXcSFHVRIVa3qZBqAYo",
  authDomain: "photo-gallery-react-firebase.firebaseapp.com",
  projectId: "photo-gallery-react-firebase",
  storageBucket: "photo-gallery-react-firebase.appspot.com",
  messagingSenderId: "200343907617",
  appId: "1:200343907617:web:2972d6b1add34e063a6260",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
