// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
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

// HTML element
var perent = document.getElementById('perent');
var allAds;


window.getData = function () {
  var referance = ref(db, `adCard/`);
  onValue(referance, function (data) {
    allAds = data.val();
    var arr = Object.values(allAds);
    perent.innerHTML = '';

    for (let i = 0; i < arr.length; i++) {
      var obj = arr[i];
      console.log(obj);
      
      perent.innerHTML +=
        `<div onclick="cardClick('${obj.id}')" class="card mt-5 mx-2 mb-2 crd" style="width: 20rem;">
            <img src="${obj.productImage2}" class="card-img-top" alt="..."
                style="height: 200px;">
            <div class="card-body">
                <div class="d-flex justify-content-between mb-4">
                    <h5 class="card-title fw-bold">Rs.${obj.price}</h5>
                    <h5 class="card-title fw-bold"><i class="fa-regular fa-heart"></i></h5>
                </div>
                <p class="card-text my-4">${obj.productName}</p>
                <p class="card-text m-0">${obj.location}</p>
                <p class="card-text" style="font-size: 12px;">5 day ago.</p>

            </div>
        </div>`

    }

  })


}
getData();

window.cardClick = function (id) {
  localStorage.setItem("carId", id);
  window.location.assign("/pages/AdDetail/AdDetail.html");
};