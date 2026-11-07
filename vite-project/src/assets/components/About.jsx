const PERKS = [
  ["Handpicked", "Quality checked by us"],
  ["Fair prices", "No hidden surprises"],
  ["Gift-ready", "Free gift wrapping"],
  ["Friendly help", "Always happy to guide"],
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        {/* To use a photo: <img src="/images/shop.jpg" alt="Our shop" /> */}
        <div className="about-art">🛍️</div>
        <div>
          <p className="eyebrow">Our story</p>
          <h2 className="section-title">A small shop with a big heart</h2>
          <p>
            We started with a simple idea: beautiful, good-quality things for women should not feel
            out of reach. Every piece in our shop is picked by hand, from delicate jewellery to
            roomy handbags and sturdy travel bags.
          </p>
          <p>
            Drop in, take your time, and let us help you find the right piece, whether it is for a
            wedding, a trip or just because.
          </p>
          <div className="perks">
            {PERKS.map(([title, text]) => (
              <div className="perk" key={title}>
                <b>{title}</b>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
