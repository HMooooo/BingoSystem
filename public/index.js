import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, onSnapshot, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getNumbers } from './js/getNumber.js'

const firebaseConfig = {
    "[API Config]"
};

//Firebaseの初期化
const app = initializeApp(firebaseConfig);
//Firestoreの初期化
const db = getFirestore(app);

const area = document.getElementById('numberSpace');

//Firestoreからすでに出た数字を取得する。非同期処理のため、awaitで待つ
const result = await getNumbers(db, area);
result.forEach(item => {
    let num = document.getElementById(item);
    num.className = "after";
});

//データが更新されたときに検知する
const c = collection(db, "numbers");
const q = query(c, orderBy("timestamp", "desc"), limit(1))

const unsub = onSnapshot(q, (doc) => {
    doc.forEach(element => {
        //console.log(element.data().number);
        let num = document.getElementById(element.data().number);
        num.className = "after";
    });

});