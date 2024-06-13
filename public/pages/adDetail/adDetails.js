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

var id = localStorage.getItem("carId");

window.getData = function () {
  var referance = ref(db, `adCard/${id}`);
  onValue(referance, function (data) {
    var obj = data.val();
    console.log(obj);
    perent.innerHTML = `<div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img height="300px" src="${obj.productImage1}" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div class="carousel-item">
          <img height="300px" src="${obj.productImage2}" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">

          </div>
        </div>
        <div class="carousel-item">
          <img height="300px" src="${obj.productImage3}" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">

          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="border border-1 rounded p-2 mt-2">
      <div class="d-flex justify-content-between">
        <p class="fs-3">Rs.${obj.price}</p>
        <p class="fs-3 px-4"><i class="fa-solid fa-share-nodes me-4"></i><i class="fa-regular fa-heart"></i></p>
      </div>
      <h3>${obj.productName}</h3>
      <div class="d-flex justify-content-between">
        <p><i class="fa-solid fa-location-dot me-2"></i>${obj.location}</p>
        <p class="px-4">2 day ago</p>
      </div>
    </div>

    <div  class="border border-1 rounded p-2 mt-3">
    ${obj.productDiscription}
    </div>
  </div>`;

  })


}
getData();
