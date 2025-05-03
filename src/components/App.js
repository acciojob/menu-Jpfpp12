import React, { useState } from "react";
import Menu from "./Menu";
import './styles.css';

const App = () => {
  const menuItems = [
    { id: 1, name: "Pancakes", category: "Breakfast", price: "$5.99", image: "pancakes.jpg", testId: "menu-item-breakfast" },
    { id: 2, name: "Omelette", category: "Breakfast", price: "$6.99", image: "omelette.jpg", testId: "menu-item-breakfast" },
    { id: 3, name: "Burger", category: "Lunch", price: "$9.99", image: "burger.jpg", testId: "menu-item-lunch" },
    { id: 4, name: "Pizza", category: "Lunch", price: "$11.99", image: "pizza.jpg", testId: "menu-item-lunch" },
    { id: 5, name: "Chocolate Shake", category: "Shakes", price: "$4.99", image: "chocolate-shake.jpg", testId: "menu-item-shakes" },
    { id: 6, name: "Vanilla Shake", category: "Shakes", price: "$4.49", image: "vanilla-shake.jpg", testId: "menu-item-shakes" }
  ];

  const [filteredCategory, setFilteredCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setFilteredCategory(category);
  };

  const filteredMenu = filteredCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === filteredCategory);

  return (
    <div id="main">
      <h1>Menu</h1>
      <div className="filter-buttons">
        <button
          id="filter-btn-1"
          onClick={() => handleCategoryClick("Breakfast")}
        >
          Breakfast
        </button>
        <button
          id="filter-btn-2"
          onClick={() => handleCategoryClick("Lunch")}
        >
          Lunch
        </button>
        <button
          id="filter-btn-3"
          onClick={() => handleCategoryClick("Shakes")}
        >
          Shakes
        </button>
      </div>
      <Menu items={filteredMenu} />
    </div>
  );
};

export default App;
