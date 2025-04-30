<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
import React, { useState } from "react";
import Menu from "./Menu";
import menu from "./data";
import "./styles.css";

function App() {
  const [items, setItems] = useState(menu);
  const [category, setCategory] = useState("all");

  const filterItems = (cat) => {
    setCategory(cat);
    if (cat === "all") {
      setItems(menu);
    } else {
      const newItems = menu.filter((item) => item.category === cat);
      setItems(newItems);
    }
  };

  return (
    <main id="main">
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button id="filter-btn-1" onClick={() => filterItems("breakfast")}>
            Breakfast
          </button>
          <button id="filter-btn-2" onClick={() => filterItems("lunch")}>
            Lunch
          </button>
          <button id="filter-btn-3" onClick={() => filterItems("shakes")}>
            Shakes
          </button>
        </div>
        <Menu items={items} />
      </section>
    </main>
  );
}

export default App;


