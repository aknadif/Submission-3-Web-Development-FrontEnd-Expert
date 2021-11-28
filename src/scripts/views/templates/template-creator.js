/* eslint-disable comma-dangle */
/* eslint-disable indent */
import CONFIG from "../../globals/config";

const createCardDetailTemplate = (card) => `
  <h2 class="card__title">${card.name}</h2>
  <img class="card__img" alt="${card.name}" src="${CONFIG.BASE_URL}images/medium/${card.pictureId}" />
  <div class="card__info">
  <h3>Information</h3>
    <h4>Alamat</h4>
    <p>${card.address}</p>
    <h4>Kota</h4>
    <p>${card.city}</p>
    <h4>Kategori</h4>
    <p>${card.categories
      .map(
        (category) => `
          <span class="category">${category.name}</span>
        `
      )
      .join(",")}</p>
  </div>
  <div class="card__overview">
    <h3>Deskripsi</h3>
    <p>${card.description}</p>
  </div>
  <h3>Menu</h3>
  <div class="detail-menu">
    <div class="detail-food">
      <h4>Makanan</h4>
      <ul>
        ${card.menus.foods
          .map(
            (food, i) => `
              <li><p>${i + 1}) ${food.name}</p></li>
            `
          )
          .join("")}
      <ul>
    </div>
    <div class="detail-drink">
      <h4>Minuman</h4>
      <ul>
        ${card.menus.drinks
          .map(
            (drink, i) => `
              <li><p>${i + 1}) ${drink.name}</p></li>
            `
          )
          .join("")}
      <ul>
    </div>
  </div>
  <h3 class="title-review">Reviews</h3>

    <div class="detail-review">
    ${card.customerReviews
      .map(
        (review) => `
          <div class="detail-review-item">
            <div class="review-header">
              <p class="review-name">${review.name}</p>

              <p class="review-date">${review.date}</p>
            </div>

            <div class="review-body">
              ${review.review}
            </div>
          </div>
        `
      )
      .join("")}
    </div>
`;

const createCardItemTemplate = (card) => `
  <div class="card-item">
  <a href="${`/#/detail/${card.id}`}">
    <div class="card-item__header">
        <img class="card-item__header__img" alt="${card.name}"
            src="${CONFIG.BASE_URL}images/medium/${card.pictureId}">
        <div class="card-item__header__rating">
            <p>⭐️<span class="card-item__header__rating__score">${card.rating}</span></p>
        </div>
    </div>
    <div class="card-item__content">
        <h3><a href="${`/#/detail/${card.id}`}">${card.name}</a></h3>
        <p>${card.description}</p>
    </div>
    </a>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createCardItemTemplate, createCardDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate };
