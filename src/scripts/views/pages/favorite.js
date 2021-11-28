import FavoriteRestoIdb from "../../data/favoriteresto-idb.js";
import { createCardItemTemplate } from "../templates/template-creator";

const Favorite = {
  async render() {
    return `
          
        <div class="content">
        <h2 class="content__heading">Favorites Restaurant</h2>
          <div id="cards" class="cards">
 
          </div>
        </div>
        `;
  },

  async afterRender() {
    const cards = await FavoriteRestoIdb.getAllRestos();
    const cardsContainer = document.querySelector("#cards");
    cards.forEach((card) => {
      cardsContainer.innerHTML += createCardItemTemplate(card);
    });
  },
};

export default Favorite;
