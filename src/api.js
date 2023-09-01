import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyC4WELZ-qgWLi9toVo91r1ADpJidVYJSiA",
  authDomain: "vanlife-d137c.firebaseapp.com",
  projectId: "vanlife-d137c",
  storageBucket: "vanlife-d137c.appspot.com",
  messagingSenderId: "246879701562",
  appId: "1:246879701562:web:4486e6c8356ac1d1ae0303",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

export async function getVans(url) {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return dataArr;
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);

  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return dataArr;
}

// export async function getVans(url) {
//   const response = await fetch(url);
//   if (!response.ok) {
//     // eslint-disable-next-line no-throw-literal
//     throw {
//       message: "Faild to fetch vans.",
//       statusText: response.statusText,
//       status: response.status,
//     };
//   }
//   const data = await response.json();
//   return data.vans;
// }

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    // eslint-disable-next-line no-throw-literal
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
