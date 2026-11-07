import { useState } from "react";
import { SHOP } from "../data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header>
      <div className="wrap nav">
        <a href="#home" className="logo">
          {SHOP.name.split(" ")[0]}
          <span>.</span>
        </a>
        <nav>
          <button className="menu-btn" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            ☰
          </button>
          <ul className={open ? "open" : ""}>
            <li><a href="#collections" onClick={close}>Collections</a></li>
            <li><a href="#about" onClick={close}>About</a></li>
            <li><a href="#contact" onClick={close}>Visit Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
