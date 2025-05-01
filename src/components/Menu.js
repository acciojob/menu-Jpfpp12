import React from "react";

function Menu({ items }) {
  return (
    <div className="menu">
      {items.map((item) => (
        <div
          key={item.id}
          className="menu-item"
          data-test-id={`menu-item-${item.category}`}
        >
          <img src={item.img} alt={item.title} className="photo" />
          <div className="info">
            <header>
              <h4>{item.title}</h4>
              <h4 className="price">${item.price}</h4>
            </header>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
