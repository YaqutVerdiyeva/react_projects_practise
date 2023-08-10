import { useState } from "react";
import Button from "./components/button";
import List from "./components/list";
import data from "./data/data";
function App() {
  const [people, setPeople] = useState(data);
  console.log(data);
  return (
    <div className="App">
      <h1>{data.length} Birtydays Today</h1>
      <List people={people}/>
      <Button setPeople={setPeople}/>
    </div>
  );
}

export default App;
