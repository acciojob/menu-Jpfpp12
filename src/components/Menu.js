import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="menu-list">
      {items.map(item => (
        <div key={item.id} data-test-id={item.testId} className="menu-item">
          <img src={item.image} alt={item.name} className="menu-item-img" />
          <div className="menu-item-details">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
