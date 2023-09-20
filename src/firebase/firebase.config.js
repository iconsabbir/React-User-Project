// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWwIp2nPVNR-HfdKdWb7R9APgGv6-rJmI",
  authDomain: "user-react-project.firebaseapp.com",
  projectId: "user-react-project",
  storageBucket: "user-react-project.appspot.com",
  messagingSenderId: "89586679285",
  appId: "1:89586679285:web:a6bc7f7a93c72577b8b4bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;