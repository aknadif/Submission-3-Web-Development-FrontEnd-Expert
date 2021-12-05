import LikeButtonInitiator from "../../src/scripts/utils/like-button-initiator";
import FavoriteRestoIdb from "../../src/scripts/data/favoriteresto-idb";

const createLikeButtonInitiatorWithResto = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    favoriteRestoIdb: FavoriteRestoIdb,
    data: { restaurant },
  });
};

export { createLikeButtonInitiatorWithResto };
