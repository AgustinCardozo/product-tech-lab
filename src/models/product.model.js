import { db } from "../database/firebase.js";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs } from "firebase/firestore";

const productsDb = collection(db, "products");

export const getAll = async () => {
  try {
    const snapshot = await getDocs(productsDb);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(error);
  }
};

export const getById = async (id) => {
  try {
    const productRef = doc(productsDb, id);
    const snapshot = await getDoc(productRef);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
  } catch (error) {
    console.error(error);
  }
};

export const create = async (data) => {
  try {
    const docRef = await addDoc(productsDb, data);
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error(error);
  }
};

export const remove = async (id) => {
  try {
    const productRef = doc(productsDb, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
      return false;
    }

    await deleteDoc(productRef);
    return true;
  } catch (error) {
    console.error(error);
  }
};
