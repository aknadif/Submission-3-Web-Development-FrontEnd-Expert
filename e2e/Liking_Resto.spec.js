Feature("Liking Restos");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

xScenario("showing empty favorite cards", ({ I }) => {
  I.seeElement("#cards");
  I.see("Restaurant favorite kosong, silahkan klik tombol hati di halaman detail.", ".empty");
});

xScenario("liking one Restaurant.", ({ I }) => {
  I.see("Restaurant favorite kosong, silahkan klik tombol hati di halaman detail.", ".empty");
  I.amOnPage("/");
  I.seeElement(".card-item__content");

  I.click(locate(".card-item a").first());

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".card-item");
});

xScenario("unliking one Restaurant.", ({ I }) => {
  I.see("Restaurant favorite kosong, silahkan klik tombol hati di halaman detail.", ".empty");
  I.amOnPage("/");
  I.seeElement(".card-item__content");

  I.click(locate(".card-item a").first());

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".card-item");

  I.click(locate(".card-item a").first());

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.dontSeeElement(".card-item");
});
