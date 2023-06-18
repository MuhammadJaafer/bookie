import { getAnalytics, isSupported } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqNQkjnoNk7u1W-la3gmbg_Bg5L0kYyyI",
  authDomain: "bookie-608d3.firebaseapp.com",
  projectId: "bookie-608d3",
  storageBucket: "bookie-608d3.appspot.com",
  messagingSenderId: "534197166029",
  appId: "1:534197166029:web:df5051eae81b87c8e0ae84",
  measurementId: "G-633JR1CL5D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));
const firestore = getFirestore(app);

export { auth, analytics, firestore, app };
