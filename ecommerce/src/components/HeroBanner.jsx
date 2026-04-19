import { useState, useEffect } from "react";
import { banners } from "../data/mockData";
import "./HeroBanner.css";

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % banners.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const b = banners[current];

  return (
    <div className="hero" style={{ background: b.bg }}>
      <div className="hero-text">
        <h2>{b.title}</h2>
        <p>{b.subtitle}</p>
        <button className="hero-cta">{b.cta}</button>
      </div>
      <img src={b.image} alt={b.title} className="hero-img" />
      <div className="hero-dots">
        {banners.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
