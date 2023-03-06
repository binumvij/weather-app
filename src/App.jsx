import { useState } from 'react';
import './App.css'
import Weather from "./Weather";


function App() {
  const apiKey = "20684b84e1574acd911171453230603";
  const [location, setLocation] = useState("Mumbai");
  const [newLocation, setNewLocation] = useState("");

   const handleLocationSubmit = (event) => {
    event.preventDefault();
    setLocation(newLocation);
  };

  const handleLocationChange = (event) => {
    setNewLocation(event.target.value);
  };

  return (
    <div className="App">
      <div className="card">
        <div className="card2">
        <div className="in-contents">
          <h1 className='weather'>Weather Forecast for Your Location</h1>
          <form onSubmit={handleLocationSubmit} className="search">
            <label htmlFor="location" className='location'>Location:</label>
            {/* <input
              type="text"
              id="location"
              name="location"
              value={newLocation}
              onChange={handleLocationChange}
            /> */}
            <input 
              type="text" 
              id="location" 
              name="location" 
              className="input" 
              placeholder="Mumbai" 
              value={newLocation} 
              onChange={handleLocationChange}
            />
            <button type="submit" className="button" data-text="Awesome">
              <span className="actual-text">&nbsp;Get&nbsp;Weather&nbsp;</span>
              <span className="hover-text" aria-hidden="true">&nbsp;Get&nbsp;Weather&nbsp;</span>
            </button>
          </form>
          <Weather apiKey={apiKey} location={location} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
