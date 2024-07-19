// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyjLJhpWU-taE8K4T39SJem9irfJ2VAqw",
    authDomain: "adcardsclone.firebaseapp.com",
    databaseURL: "https://adcardsclone-default-rtdb.firebaseio.com",
    projectId: "adcardsclone",
    storageBucket: "adcardsclone.appspot.com",
    messagingSenderId: "389496814432",
    appId: "1:389496814432:web:d81b6a9878e08645fdbc05",
    measurementId: "G-59B1PG774F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")

window.signUp = () => {
    let obj = {
        username: username.value,
        email: email.value,
        password: password.value,
    }
    console.log(obj);
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then((res) => { console.log(res); })
        .catch((err) => { alert(err.message); })
}
