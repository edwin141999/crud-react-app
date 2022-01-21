import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore, query } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAfcrvYb2_oKpqlUEyJmDdrBKO1v1OqvMs",
    authDomain: "taskreact-61b5c.firebaseapp.com",
    projectId: "taskreact-61b5c",
    storageBucket: "taskreact-61b5c.appspot.com",
    messagingSenderId: "80532859434",
    appId: "1:80532859434:web:d583dae54948e035107153"
});

const db = getFirestore()

const orderCollection = collection(db, "tasks")

async function addTask(title, description) {
    const docRef = await addDoc(orderCollection, {
        title: title,
        description: description,
        done: false
    })
    console.log("ID:", docRef.id, "data:", `${docRef.path}`);
}

const getTasks = async () => { return getDocs(query(orderCollection)) }

export { addTask, getTasks }