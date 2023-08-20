import { useState } from "react";
import texts from "./data/data";
function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  // console.log(texts);

  const handleSubmit = (e) => {
    e.preventDefault();
    let countValue = parseInt(count);
    if (count <= 0) {
      countValue = 1;
    }
    if (count > 8) {
      countValue = 8;
    }
    setText(texts.slice(0, countValue));
  };

  return (
    <div className="App">
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <form className="input-btn" onSubmit={handleSubmit}>
        <h3>Paragraphs:</h3>
        <input
          className="input"
          id="countValue"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          type="number"
        />
        <button className="btn">Generate</button>
      </form>
      <div className="lorem-text">
        {text.map((el, i) => {
          return <p className="text" key={i}>{el}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
