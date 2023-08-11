import { useEffect } from "react";
import { useState } from "react";
import Tourlist from "./components/Tourlist";
import axios from "axios";
import Loading from "./components/Loading";
const BASE_URL = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const removeTour = (id) => {
    console.log(id);
    let filteredTours = tours.filter((el) => el.id != id);
    setTours(filteredTours);
  };
  const getAllTours = async () => {
    setLoading(true);
    try {
      let response = await axios.get(BASE_URL);
      let data = await response.data;
      setTours(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllTours();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if(tours.length===0){
    return(
      <div className="no-tours">
        <h1>No Tours Left!</h1>
        <button onClick={()=>getAllTours()} className="btn-refresh">Refresh</button>
      </div>
    )
  }
  return (
    <div className="App">
      <h1>Our Tours</h1>
      <Tourlist tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
