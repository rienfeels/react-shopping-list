// src/ShoppingList.jsx
import React from "react";

function ShoppingList({ items }) {
  return (
    <div>
      {items.length > 0 && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingList;
