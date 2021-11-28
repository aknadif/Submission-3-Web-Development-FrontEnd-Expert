class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
    <p>Copyright © 2021 - <a href="http://aknadhif.me/" target="_blank" rel="noreferrer">Burger Pub</a></p>
  </footer>
        `;
  }
}

customElements.define("comp-footer", Footer);
