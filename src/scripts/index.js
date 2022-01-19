/* eslint-disable no-plusplus */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../DATA.json';
import App from './views/app';

// Card
const cardCol = document.getElementById('cardColumn');
// Burger Menu
const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

// // Slider Review
// let slideIndex = 0;

// function showSlides() {
//   let i;
//   const slides = document.getElementsByClassName('mySlides');
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) { slideIndex = 1; }
//   slides[slideIndex - 1].style.display = 'block';
//   setTimeout(showSlides, 3000); // 3 seconds
// }
// showSlides();
// //

// data.restaurants.forEach((resto) => {
//   const card = `<div class="row">
//   <div class="column">
//   <div class="card">
//   <p class="kota"> ${resto.city} </p>
//   <img src="${resto.pictureId}" class="card-img" alt="gambar resto" style="width:100%">
//   <h3>${resto.name}</h3>
//   <p class="rating">Rating : ${resto.rating} ⭐</p>
//   <p class="description">${resto.description}</p>
//   </div>
//   </div>
//   </div>`;

//   cardCol.insertAdjacentHTML('beforeend', card);
// });
