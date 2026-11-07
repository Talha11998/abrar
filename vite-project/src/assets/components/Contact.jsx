import { SHOP, waLink } from "../data";

export default function Contact() {
  const tel = "tel:" + SHOP.phone.replace(/\s/g, "");
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(SHOP.mapQuery)}&output=embed`;

  return (
    <section id="contact">
      <div className="wrap">
        <p className="eyebrow">Visit us</p>
        <h2 className="section-title">Come say hello</h2>
        <p className="section-sub">
          We would love to see you in store, or just send us a message.
        </p>
        <div className="contact-grid">
          <div className="info">
            <h3>{SHOP.name}</h3>
            <dl>
              <div><dt>Address</dt><dd>{SHOP.address}</dd></div>
              <div><dt>Hours</dt><dd>{SHOP.hours}</dd></div>
              <div><dt>Phone</dt><dd><a href={tel}>{SHOP.phone}</a></dd></div>
            </dl>
            <div className="hero-actions">
              <a
                className="btn btn-wa"
                target="_blank"
                rel="noopener noreferrer"
                href={waLink("Hi! I saw your website and would like to know more.")}
              >
                Chat on WhatsApp
              </a>
              <a className="btn btn-outline" href={tel}>Call Now</a>
            </div>
          </div>
          <div className="map">
            <iframe src={mapSrc} loading="lazy" title="Shop location" />
          </div>
        </div>
      </div>
    </section>
  );
}
