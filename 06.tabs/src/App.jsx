import { useState } from "react";
import { useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

import axios from "axios";
const BASE_URL = "https://course-api.com/react-tabs-project";
function App() {
  const [tabs, setTabs] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadmore, setLoadmore] = useState(false);
  const getAllTabs = async () => {
    const res = await axios.get(BASE_URL);
    const data = await res.data;
    console.log(data);
    setTabs(data);
    setLoading(false);
  };
  useEffect(() => {
    getAllTabs();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  const { title, dates, duties, company } = tabs[value];
  return (
    <div className="section">
      <div className="App">
        <div className="tabs">
          {tabs.map((elem, i) => {
            return (
              <button
                onClick={() => setValue(i)}
                className={`btn ${i === value && "active-btn"}`}
                key={elem.id}
              >
                {elem.company}
              </button>
            );
          })}
        </div>
        <div className="texts">
          <h1>{title}</h1>
          <span className="comp">{company}</span>
          <p className="dates">{dates}</p>
          {duties.map((el, i) => {
            return (
              <div className={`duties ${loadmore ? `more-text` : `less-text`}`}>
                <FaAngleDoubleRight className="icon"></FaAngleDoubleRight>
                <p  key={i}>{loadmore ? `${duties}` : `${duties[0]}`}</p>
              </div>
            );
          })}
        </div>
      </div>
      <button
        className="loadmore"
        onClick={() => {
          if (loadmore) {
            setLoadmore(false);
          } else {
            setLoadmore(true);
          }
        }}
      >
        {loadmore ? "Load less" : "Load more"}
      </button>
    </div>
  );
}

export default App;
