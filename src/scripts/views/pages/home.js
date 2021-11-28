// eslint-disable-next-line import/extensions
import DbSource from "../../data/db-source.js";
import "../../components/hero";
import { createCardItemTemplate, loader } from "../templates/template-creator";

const Home = {
  async render() {
    return `
    <div id="loading"></div>
  
    <div class="content" id="content">
    <cost-hero></cost-hero>
        <h2 class="content__heading">Restaurants</h2>
        <div id="cards" class="cards">
 
        </div>
    </div>
        `;
  },

  async afterRender() {
    const loading = document.querySelector("#loading");
    const cardsContainer = document.querySelector("#cards");
    const content = document.querySelector("#content");

    content.style.display = "none";
    loading.innerHTML = loader();

    try {
      const cards = await DbSource.list();
      cards.restaurants.forEach((card) => {
        cardsContainer.innerHTML += createCardItemTemplate(card);
      });
      loading.style.display = "none";
      content.style.display = "block";
    } catch (error) {
      console.error(error);
      loading.style.display = "none";
      content.style.display = "none";
      content.innerHTML = `Error: ${err.message}`;
    }
  },
};

export default Home;
