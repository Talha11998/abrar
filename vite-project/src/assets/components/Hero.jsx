export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">Jewellery · Bags · Accessories</p>
          <h1>
            Thoughtfully chosen pieces for <em>every her</em>
          </h1>
          <p>
            Handpicked jewellery, handbags, travel luggage and everyday accessories, all in one
            little shop. Come see them in person.
          </p>
          <div className="hero-actions">
            <a href="#collections" className="btn btn-primary">Browse Collection</a>
            <a href="#contact" className="btn btn-outline">Visit the Shop</a>
          </div>
        </div>
        {/* To use a photo: <img src="/images/hero.jpg" alt="Our shop" /> */}
        <div className="hero-art">✨</div>
      </div>
    </section>
  );
}
