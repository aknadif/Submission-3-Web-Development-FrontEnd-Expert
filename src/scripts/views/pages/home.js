// eslint-disable-next-line import/extensions
import DbSource from "../../data/db-source.js";
import { createCardItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
    <section class="hero">
    <img src="./images/hero-image.jpg" alt="hero">
    <div class="text">
        <h1>Burger Pub</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam recusandae ex officiis rem odio,
            voluptatibus, fugiat assumenda blanditiis dignissimos tempora id expedita asperiores voluptate
            dolorem.</p>
        </div>
    </section>

    <div class="content">
        <h2 class="content__heading">Restaurants</h2>
        <div id="cards" class="cards">
 
        </div>
    </div>
        `;
  },

  async afterRender() {
    await DbSource.list();
    const cards = await DbSource.list();
    const cardsContainer = document.querySelector("#cards");
    cards.restaurants.forEach((card) => {
      cardsContainer.innerHTML += createCardItemTemplate(card);
    });
  },
};

export default Home;
