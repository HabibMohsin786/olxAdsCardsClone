// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getDatabase, set, push, ref } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
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
const db = getDatabase();

//get HTML elements
var productName = document.getElementById('productName');
var productImage1 = document.getElementById('productImage1');
var productImage2 = document.getElementById('productImage2');
var productImage3 = document.getElementById('productImage3');
var productDiscription = document.getElementById('productDiscription');
var price = document.getElementById('price');
var location = document.getElementById('location');


window.createAdd = function () {
    var obj ={
        productName : productName.value,
        productImage1: productImage1.value,
        productImage2: productImage2.value,
        productImage3: productImage3.value,
        productDiscription: productDiscription.value,
        price: price.value,
        location: location.value,
    }
    
    obj.id = push(ref(db, `adCard/`)).key;

    var referance = ref(db, `adCard/${obj.id}`);
    set(referance, obj);

}

