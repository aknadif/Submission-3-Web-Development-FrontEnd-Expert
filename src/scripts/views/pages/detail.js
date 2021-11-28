import UrlParser from "../../routes/url-parser";
import DbSource from "../../data/db-source";
// eslint-disable-next-line import/named
import { createCardDetailTemplate } from "../templates/template-creator";
import LikeButtonInitiator from "../../utils/like-button-initiator";

const Detail = {
  async render() {
    return `
        <div id="card" class="card"></div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const card = await await DbSource.detail(url.id);
    const data = await DbSource.detail(url.id);
    const cardContainer = document.querySelector("#card");
    cardContainer.innerHTML = createCardDetailTemplate(card.restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      data,
    });
  },
};

export default Detail;
