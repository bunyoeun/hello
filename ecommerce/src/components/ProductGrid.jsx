import { products } from "../data/mockData";
import "./ProductGrid.css";

function ProductCard({ item }) {
  return (
    <div className="product-card">
      <img src={item.image} alt={item.name} />
      <div className="product-info">
        <p className="product-name">{item.name}</p>
        <p className="product-price">${item.price.toFixed(2)}</p>
        <p className="product-sold">{item.sold.toLocaleString()} sold</p>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section className="product-section">
      <h2 className="section-title">More for you</h2>
      <div className="product-grid">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
