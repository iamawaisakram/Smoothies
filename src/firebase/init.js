import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPUHrhckHObYtgWH1uqWjqDYXNMFZXu1k",
  authDomain: "smoothies-97c2c.firebaseapp.com",
  databaseURL: "https://smoothies-97c2c.firebaseio.com",
  projectId: "smoothies-97c2c",
  storageBucket: "smoothies-97c2c.appspot.com",
  messagingSenderId: "684042212969",
  appId: "1:684042212969:web:f03fa702fe93778bc174f8",
  measurementId: "G-T0HFSSP030"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
