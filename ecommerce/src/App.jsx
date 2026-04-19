import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import CategoryNav from "./components/CategoryNav";
import DealsSection from "./components/DealsSection";
import ProductGrid from "./components/ProductGrid";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroBanner />
        <CategoryNav />
        <DealsSection />
        <ProductGrid />
      </main>
    </div>
  );
}
