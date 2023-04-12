//                              Google Popop
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7uAQjnpmQ43XaRr4F8O0ALBPaXKBS8WQ",
  authDomain: "olx-copy-f467d.firebaseapp.com",
  projectId: "olx-copy-f467d",
  storageBucket: "olx-copy-f467d.appspot.com",
  messagingSenderId: "293948150100",
  appId: "1:293948150100:web:e447f036ebb8ea4f1b38c1",
  measurementId: "G-H75P1FQG01"
};

//                      server yasash
const server = firebase.initializeApp(firebaseConfig);
const auth = server.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}

// Sharh: Buni ham snipedga o'xshab har joyda ishlatsa bo'larka