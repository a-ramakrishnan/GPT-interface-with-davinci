import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiECfvrksgATpPsDpuD3JefL_alYhKy7w",
  authDomain: "ai-apps-d2df6.firebaseapp.com",
  projectId: "ai-apps-d2df6",
  storageBucket: "ai-apps-d2df6.appspot.com",
  messagingSenderId: "347824515948",
  appId: "1:347824515948:web:31340abc8dd12f545ba149",
};

// Initialize Firebase

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
