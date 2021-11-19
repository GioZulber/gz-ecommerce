import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB5piL3oJ_d_H9nT-WcbqPMyQ0y1bKy03Q",
  authDomain: "gz-ecommerce.firebaseapp.com",
  projectId: "gz-ecommerce",
  storageBucket: "gz-ecommerce.appspot.com",
  messagingSenderId: "929234243344",
  appId: "1:929234243344:web:05a86d1389ad2c38be1f95",
};

export const getFirebase = () => app;
const app = initializeApp(firebaseConfig);

export { getFirestore };
