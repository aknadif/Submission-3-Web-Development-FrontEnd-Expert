class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="hero">
    <picture>
      <source media="(max-width: 600px)" type="image/webp" srcset="./images/hero-image-600.webp">
      <img src="./images/hero-image-1200.webp" alt="hero">
    </picture>
    <div class="text">
        <h1>Burger Pub</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam recusandae ex officiis rem odio,
            voluptatibus, fugiat assumenda blanditiis dignissimos tempora id expedita asperiores voluptate
            dolorem.</p>
        </div>
    </section>
          `;
  }
}

customElements.define("cost-hero", Hero);
