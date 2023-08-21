import { useEffect, useState } from "react";
import Alertt from "./components/Alert";
import List from "./components/List";

const getLocaleStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};
function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState(getLocaleStorage());
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      showAlert(true, "error", "Please enter value");
    } else if (item && editing) {
      setList(
        list.map((elem) => {
          if (elem.id === editId) {
            return { ...elem, title: item };
          }
          return elem;
        })
      );
      setItem("");
      setEditId(null);
      setEditing(false);
      showAlert(true, "success", "Value changed");
    } else {
      showAlert(true, "success", "Item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: item };
      setList([...list, newItem]);
      setItem("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, 'error', 'Empty list');
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, 'error', 'Item removed');
    setList(list.filter((el) => el.id !== id));
  };

  const editItem = (id) => {
    const editedItem = list.find((item) => item.id === id);
    setEditing(true);
    setEditId(id);
    setItem(editedItem.title);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <div className="App">
        {alert.show && <Alertt {...alert} showAlert={showAlert} list={list} />}
      <div className="card">
        <h1>Grocery Bud</h1>
        <form className="input-btn" onSubmit={handleSubmit}>
          <input
            value={item}
            onChange={(e) => setItem(e.target.value)}
            type="text"
          />
          <button type="submit">Add Item</button>
        </form>
        {list.length > 0 && (
          <div className="card-list">
            <List removeItem={removeItem} editItem={editItem} list={list} />
            <button className="clear-btn" onClick={clearList}>
              Clear item
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
