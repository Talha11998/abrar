// ============ EDIT YOUR SHOP DETAILS HERE ============
export const SHOP = {
  name: "Aanya Boutique",
  phone: "+91 98765 43210",
  whatsapp: "919876543210", // country code + number, no + or spaces
  address: "Shop No. 12, Main Road, Your Area, Hyderabad, Telangana",
  hours: "Mon–Sat: 10:30 AM – 9:00 PM · Sun: 11:00 AM – 7:00 PM",
  mapQuery: "Hyderabad, Telangana", // used for the Google Map
};

export const CATEGORIES = [
  { id: "jewellery", label: "Jewellery", icon: "💍", blurb: "Earrings, necklaces, bangles" },
  { id: "handbags", label: "Handbags", icon: "👜", blurb: "Totes, slings, clutches" },
  { id: "luggage", label: "Travel Bags", icon: "🧳", blurb: "Luggage & carry-on bags" },
  { id: "accessories", label: "Accessories", icon: "🧣", blurb: "Scarves, wallets & more" },
];

// image: "/images/your-photo.jpg" (put files in the `public/images` folder; leave "" for a placeholder)
// price: "" hides the price
export const PRODUCTS = [
  { name: "Pearl Drop Earrings", cat: "jewellery", desc: "Lightweight, elegant, perfect for occasions.", price: "₹499", image: "", tag: "New" },
  { name: "Layered Gold Necklace", cat: "jewellery", desc: "Anti-tarnish finish with a soft shine.", price: "₹899", image: "" },
  { name: "Kundan Bangle Set", cat: "jewellery", desc: "Set of 4 for weddings and festivals.", price: "₹1,199", image: "", tag: "Popular" },
  { name: "Oxidised Jhumkas", cat: "jewellery", desc: "Traditional style that goes with everything.", price: "₹349", image: "" },
  { name: "Classic Tote Bag", cat: "handbags", desc: "Roomy, sturdy, ideal for work or college.", price: "₹1,499", image: "", tag: "Bestseller" },
  { name: "Mini Sling Bag", cat: "handbags", desc: "Compact and stylish for daily outings.", price: "₹799", image: "" },
  { name: "Party Clutch", cat: "handbags", desc: "Sparkly detail with a detachable chain.", price: "₹649", image: "" },
  { name: 'Cabin Trolley 20"', cat: "luggage", desc: "Hard shell, 4 wheels, TSA lock.", price: "₹3,299", image: "", tag: "Travel" },
  { name: "Weekender Duffle", cat: "luggage", desc: "Soft, spacious bag for short trips.", price: "₹1,899", image: "" },
  { name: "Travel Organiser Set", cat: "luggage", desc: "Packing pouches in 3 sizes.", price: "₹599", image: "" },
  { name: "Silk Blend Scarf", cat: "accessories", desc: "Soft and breathable in lovely prints.", price: "₹399", image: "" },
  { name: "Ladies Wallet", cat: "accessories", desc: "Multiple card slots and zipper pocket.", price: "₹549", image: "" },
  { name: "Hair Accessory Combo", cat: "accessories", desc: "Clips, scrunchies and bands in one pack.", price: "₹249", image: "" },
];

export const waLink = (text) =>
  `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(text)}`;
