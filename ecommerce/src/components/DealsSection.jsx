import { deals } from "../data/mockData";
import "./DealsSection.css";

function DealCard({ item }) {
  return (
    <div className="deal-card">
      <div className="deal-img-wrap">
        <img src={item.image} alt={item.name} />
        <span className="discount-badge">{item.discount}% off</span>
      </div>
      <div className="deal-info">
        <p className="deal-name">{item.name}</p>
        <p className="deal-price">${item.price.toFixed(2)}</p>
        <p className="deal-original">${item.originalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default function DealsSection() {
  return (
    <section className="deals-section">
      <h2 className="section-title">Deals for you</h2>
      <div className="deals-grid">
        {deals.map((item) => (
          <DealCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
