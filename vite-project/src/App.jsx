import { useState } from "react";
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import Categories from "./assets/components/Categories";
import Products from "./assets/components/Products";
import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import { SHOP, waLink } from "./assets/data";

export default function App() {
  const [active, setActive] = useState("all");

  return (
    <>
      <Header />
      <main id="home">
        <Hero />
        <Categories onSelect={setActive} />
        <Products active={active} onSelect={setActive} />
        <About />
        <Contact />
      </main>
      <footer>
        © {new Date().getFullYear()} {SHOP.name}. All rights reserved.
      </footer>
      <a
        className="fab"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        href={waLink("Hi! I saw your website and would like to know more.")}
      >
        💬
      </a>
    </>
  );
}
