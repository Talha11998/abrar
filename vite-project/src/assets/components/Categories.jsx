import { CATEGORIES } from "../data";

export default function Categories({ onSelect }) {
  const pick = (id) => {
    onSelect(id);
    document.getElementById("collections")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
      <div className="wrap">
        <p className="eyebrow">Shop by category</p>
        <h2 className="section-title">Find what you love</h2>
        <p className="section-sub">Tap a category to see the pieces we have in store.</p>
        <div className="cat-grid">
          {CATEGORIES.map((c) => (
            <button key={c.id} className="cat" onClick={() => pick(c.id)}>
              <div className="ico">{c.icon}</div>
              <h3>{c.label}</h3>
              <p>{c.blurb}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
