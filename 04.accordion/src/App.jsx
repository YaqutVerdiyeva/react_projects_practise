import { useState } from "react";
import Questions from "./components/Questions";
import questions from "./data/data";

function App() {
  const [question, setQuestion] = useState(questions);
  return (
    <div className="App">
      <h1>Questions</h1>
      {question.map((elem) => {
        return (
          <Questions
            key={elem.id}
            id={elem.id}
            title={elem.title}
            info={elem.info}
          />
        );
      })}
    </div>
  );
}

export default App;
