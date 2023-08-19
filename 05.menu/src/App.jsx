import { useState } from "react";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import menu from "./data/data";
const allCategories = ["all", ...new Set(menu.map((el) => el.category))];

function App() {
  const [menuItem, setMenuItem] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const filteredItems = (category) => {
    if (category === "all") {
      setMenuItem(menu);
      return;
    }
    const newItems = menu.filter((elem) => elem.category === category);
    setMenuItem(newItems);
  };

  return (
    <div className="App">
      <h1>Our Menu</h1>
      <Categories categories={categories} filteredItems={filteredItems} />
      <Menu menuItem={menuItem} />
    </div>
  );
}

export default App;
