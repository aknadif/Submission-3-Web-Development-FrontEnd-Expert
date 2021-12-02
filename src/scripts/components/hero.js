class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="hero">
    <picture>
    <source type="image/webp" srcset="./images/hero-image.webp">
    <source type="image/jpeg" srcset="./images/hero-image.jpg">
      <img src="./images/hero-image.jpg" alt="hero">
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
