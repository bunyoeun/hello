import { categories } from "../data/mockData";
import "./CategoryNav.css";

export default function CategoryNav() {
  return (
    <section className="cat-section">
      <div className="cat-scroll">
        {categories.map((cat) => (
          <button key={cat.id} className="cat-item">
            <img src={cat.image} alt={cat.name} />
            <span>{cat.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
