import React, { useState } from "react";

function ShoppingForm({ generateList }) {
  const [myList, setMyList] = useState({ items: [] });
  const [newItem, setNewItem] = useState("");

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleSubmit = () => {
    if (newItem.trim() !== "") {
      setMyList({ items: [...myList.items, newItem] });
      setNewItem("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={handleInputChange}
        placeholder="Enter a new item"
        name={`item-${myList.items.length}`}
      />
      <button onClick={handleSubmit}>Add to List</button>
      <button onClick={() => generateList(myList.items)}>Make My List</button>
    </div>
  );
}

export default ShoppingForm;
