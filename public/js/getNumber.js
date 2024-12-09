import { collection, query, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

export async function getNumbers(db, area) {
    const getNumbers = []; //取得できた数字を格納する配列
    const q = query(collection(db, "numbers")); //クエリ

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data().number);
        getNumbers.push(doc.data().number)
    });

    return getNumbers
}

export default function () { }