import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
    "[API Config]"
};

//Firebaseの初期化
const app = initializeApp(firebaseConfig);
//Firestoreの初期化
const db = getFirestore(app);

const btn = document.getElementById("set")
btn.addEventListener('click', setNumber);

function getTimestamp(){
    const timestamp = Date.now();
    return timestamp;
}

async function setNumber() {

    //乱数生成用
    var S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    var N = 16

    const ipt = document.getElementById("number");
    await setDoc(await doc(db, "numbers", Array.from(crypto.getRandomValues(new Uint8Array(N))).map((n) => S[n % S.length]).join('')), {
        number: ipt.value,
        timestamp: getTimestamp()
    });
    console.log("ログ")
}