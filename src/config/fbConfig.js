 import firebase from 'firebase/app'
 import 'firebase/firestore'// firebase database
 import 'firebase/auth' // firebase authentication
 // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyAsaYeE6O-KjJ2ZtQuwmXtrv2nRimTcx3c",
    authDomain: "authenticate-72782.firebaseapp.com",
    databaseURL: "https://authenticate-72782.firebaseio.com",
    projectId: "authenticate-72782",
    storageBucket: "authenticate-72782.appspot.com",
    messagingSenderId: "560616559113",
    appId: "1:560616559113:web:01cdd12cbfd2c3e65c5ed8"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase