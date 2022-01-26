import { initializeApp } from "firebase/app";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, query, updateDoc } from "firebase/firestore";

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
    }).catch(err => console.error(err))
    console.log("ID:", docRef.id, "data:", `${docRef.path}`);
}

const getTasks = async () => { return getDocs(query(orderCollection)) }

const getTask = async (id) => { return getDoc(doc(db, "tasks", id)) }

async function updateTask(id, title, description, done) {
    await updateDoc(doc(db, "tasks", id), { title: title, description: description, done: done })
}

async function deleteTask(id) {
    return deleteDoc(doc(db, "tasks", id))
}

export { addTask, getTasks, updateTask, getTask, deleteTask }