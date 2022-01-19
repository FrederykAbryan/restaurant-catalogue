import CONFIG from '../globals/config';

const createRestaurantDetailTemplate = (resto) => `
<h2 class="resto_name">${resto.name}</h2>
  <img class="resto_poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
  <div class="resto__info">
  <h3>Information</h3>
    <p>${resto.description}</p>
    <p>${resto.city}</p>
    <p>${resto.address} minutes</p>
    <h3>Foods Menu</h3>
    <p>${resto.menus.foods.map((food) => food.name)}</p>
    <h3>Drinks Menu</h3>
    <p>${resto.menus.drinks.map((drink) => drink.name)}</p>
    <h3>Customer Review</h3>
    <p>${resto.customerReviews.map((reviews) => `

    <p>${reviews.name}</p>
    <p>${reviews.date}</p>
    <p>${reviews.review}</p>
    `)}</p>
  </div>
  </div>
`;

const createRestaurantListTemplate = (resto) => `
<div class="resto-item">
    <div class="resto-item__header">
        <img class="resto-item__header__poster" alt="${resto.name}"
        src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name} " />
        <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h3><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
        <p>${resto.description}</p>
    </div>
  </div>
`;
export { createRestaurantListTemplate, createRestaurantDetailTemplate };
