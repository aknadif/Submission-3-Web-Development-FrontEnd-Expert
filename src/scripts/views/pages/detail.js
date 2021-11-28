import UrlParser from "../../routes/url-parser";
import DbSource from "../../data/db-source";
import { createCardDetailTemplate, loader } from "../templates/template-creator";
import LikeButtonInitiator from "../../utils/like-button-initiator";

const Detail = {
  async render() {
    return `
    <div id="loading"></div>
    <div id="card" class="card"></div>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const card = await await DbSource.detail(url.id);
    const cardContainer = document.querySelector("#card");
    const loading = document.querySelector("#loading");
    cardContainer.style.display = "none";
    loading.innerHTML = loader();

    try {
      const data = await DbSource.detail(url.id);
      cardContainer.innerHTML = createCardDetailTemplate(card.restaurant);
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector("#likeButtonContainer"),
        data,
      });
      cardContainer.style.display = "grid";
      loading.style.display = "none";
    } catch (error) {
      console.error(error);
      loading.style.display = "none";
      cardContainer.style.display = "none";
      cardContainer.innerHTML = `Error: ${error.massage}`;
    }
  },
};

export default Detail;
