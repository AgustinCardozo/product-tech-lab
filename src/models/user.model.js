import { db } from "../database/firebase.js";

import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

const usersDb = collection(db, "users");

export const createUser = async (email, passwordHash) => {
  try {
    const docRef = await addDoc(usersDb, { email, password: passwordHash });
    return { id: docRef.id, email };
  } catch (error) {
    console.log(error);
  }
};

export const findUserByEmail = async (email) => {
  try {
    const q = query(usersDb, where("email", "==", email));
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      const doc = snapshot.docs[0];
      return { id: doc.id, ...doc.data() };
    } 
    return null;
  } catch (error) {
    console.log(error);
  }
};