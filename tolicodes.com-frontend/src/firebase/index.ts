import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

import { firebaseConfig } from "../configs/firebase.config";

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore();

export const getCollection = async (collectionName: string) =>
  await getDocs(collection(firestore, collectionName));
