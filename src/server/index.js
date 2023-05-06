import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKOZWZze5ZSRnWX3uA_spT614lE8WncRE",
  authDomain: "uzum-b4cb9.firebaseapp.com",
  projectId: "uzum-b4cb9",
  storageBucket: "uzum-b4cb9.appspot.com",
  messagingSenderId: "1030612073535",
  appId: "1:1030612073535:web:ec67fb11750232e5c6cc8a",
  measurementId: "G-SZ28CFX749",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
