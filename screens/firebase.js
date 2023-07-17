
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0pCAWaAkiwMwV-kv5SwmPTQuHayxuU7I",
  authDomain: "protector-71956.firebaseapp.com",
  projectId: "protector-71956",
  storageBucket: "protector-71956.appspot.com",
  messagingSenderId: "1000580778214",
  appId: "1:1000580778214:web:ca5f2aad953517f52b5327",
  measurementId: "G-PBXWF8EH1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);