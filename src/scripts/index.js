import "regenerator-runtime";
import "../styles/main.css";
import "../styles/style.css";
import "../styles/responsive.css";
import "../styles/hero.css";
import "../styles/loader.css";
import App from "./views/app";
import swRegister from "./utils/sw-register";

import "./components/footer";

const app = new App({
  button: document.querySelector("#hamburgerButton"),
  drawer: document.querySelector("#navigationDrawer"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
