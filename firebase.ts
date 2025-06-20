// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsTag3-arcpfACpe70MlZtfALeKCZC3p4",
  authDomain: "chemcycle-adb02.firebaseapp.com",
  projectId: "chemcycle-adb02",
  storageBucket: "chemcycle-adb02.firebasestorage.app",
  messagingSenderId: "970526566107",
  appId: "1:970526566107:web:be612c493b5089b3404efe"
};

// Initialize Firebase
import { getAuth } from "firebase/auth";
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;