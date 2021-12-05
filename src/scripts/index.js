import "regenerator-runtime";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
// css
import "../styles/main.css";
import "../styles/style.css";
import "../styles/navbar.css";
import "../styles/cards.css";
import "../styles/responsive.css";
import "../styles/hero.css";
import "../styles/loader.css";
import "../styles/footer.css";
// js
import App from "./views/app";
import swRegister from "./utils/sw-register";
// components
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
