import firebase from "firebase";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDaW1B9iBzmYdG8-1AfQyI046p21ymKBAo",
    authDomain: "react-crud-951ac.firebaseapp.com",
    databaseURL: "https://react-crud-951ac.firebaseio.com",
    projectId: "react-crud-951ac",
    storageBucket: "react-crud-951ac.appspot.com",
    messagingSenderId: "515168011015",
    appId: "1:515168011015:web:921a2802a54da77c193ba2",
    measurementId: "G-2HR48XE4DP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase
