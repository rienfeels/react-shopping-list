import { useState } from "react";
import ShoppingForm from "./components/ShoppingForm";
import ShoppingList from "./components/ShoppingList";

import "./App.css";

function App() {
  const [shoppingListItems, setShoppingListItems] = useState([]);

  const generateList = (newItems) => {
    setShoppingListItems(newItems);
  };

  return (
    <>
      <div>
        <h1>React SHopping List</h1>
        <ShoppingForm generateList={generateList} />
        <ShoppingList items={shoppingListItems} />
      </div>
    </>
  );
}

export default App;
