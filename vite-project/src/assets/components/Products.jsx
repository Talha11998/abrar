import { CATEGORIES, PRODUCTS, waLink } from "../data";

const TINTS = ["#f6e3d8", "#efe3f0", "#e2eee6", "#f4ead2"];
const iconFor = (id) => CATEGORIES.find((c) => c.id === id)?.icon || "🛍️";

function ProductCard({ product, index }) {
  const { name, cat, desc, price, image, tag } = product;
  return (
    <article className="card">
      <div className="thumb" style={{ background: TINTS[index % TINTS.length] }}>
        {image ? <img src={image} alt={name} loading="lazy" /> : iconFor(cat)}
        {tag && <span className="tag">{tag}</span>}
      </div>
      <div className="card-body">
        <h3>{name}</h3>
        <p>{desc}</p>
        {price && <span className="price">{price}</span>}
        <a
          className="btn btn-wa"
          target="_blank"
          rel="noopener noreferrer"
          href={waLink(`Hi! I'm interested in "${name}". Is it available?`)}
        >
          Ask on WhatsApp
        </a>
      </div>
    </article>
  );
}

export default function Products({ active, onSelect }) {
  const filters = [{ id: "all", label: "All" }, ...CATEGORIES];
  const list = PRODUCTS.filter((p) => active === "all" || p.cat === active);

  return (
    <section id="collections" style={{ paddingTop: 20 }}>
      <div className="wrap">
        <p className="eyebrow">Our collection</p>
        <h2 className="section-title">Featured pieces</h2>
        <p className="section-sub">
          Stock changes often. Message us to check availability or ask for more photos.
        </p>
        <div className="filters">
          {filters.map((f) => (
            <button
              key={f.id}
              className={`chip ${f.id === active ? "active" : ""}`}
              onClick={() => onSelect(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="grid">
          {list.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
