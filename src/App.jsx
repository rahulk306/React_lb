import "./App.css";
import data from './data';
import { useState } from "react";
import Tours from './component/Tours'


const App=()=> {
  const [tours, setTours] = useState(data)

  function removeTours(id)
  {
      const newTours = tours.filter(tour => tour.id !== id);
      setTours(newTours);
  }

  if(tours.length === 0)
  {
    return(
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button onClick={() => setTours(data)} className="btn-white">Refresh</button>
      </div>
    );
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTours}></Tours>
    </div>
  );
}

export default App;