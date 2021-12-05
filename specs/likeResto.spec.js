import FavoriteRestoIdb from "../src/scripts/data/favoriteresto-idb";
import * as testFactories from "./helpers/testFactories";

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe("Liking A Restaurant", () => {
  beforeEach(() => {
    addLikeButtonContainer();
  });
  it("should show the like button when the resto has not been liked before", async () => {
    await testFactories.createLikeButtonInitiatorWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="like this resto"]')).toBeTruthy();
  });

  it("should not show the unlike button when the resto has not been liked before", async () => {
    await testFactories.createLikeButtonInitiatorWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeFalsy();
  });

  it("should be able to like the resto", async () => {
    await testFactories.createLikeButtonInitiatorWithResto({ id: 1 });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const resto = await FavoriteRestoIdb.getResto(1);

    expect(resto).toEqual({ id: 1 });

    FavoriteRestoIdb.deleteResto(1);
  });

  it("should not add a resto again when its already liked", async () => {
    await testFactories.createLikeButtonInitiatorWithResto({ id: 1 });

    // Tambahkan resto dengan ID 1 ke daftar resto yang disukai
    await FavoriteRestoIdb.putResto({ id: 1 });
    // Simulasikan pengguna menekan tombol suka resto
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    // tidak ada resto yang ganda
    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([{ id: 1 }]);

    FavoriteRestoIdb.deleteResto(1);
  });

  it("should not add a resto when it has no id", async () => {
    await testFactories.createLikeButtonInitiatorWithResto({});

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });
});
