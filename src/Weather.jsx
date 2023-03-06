import React, { useState, useEffect } from "react";
import './App.css'
import axios from "axios";

const Weather = ({ apiKey, location }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`
      );
      setWeather(response.data);
    };

    fetchWeather();
  }, [apiKey, location]);

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div className="result">
      <h2>Current Weather in {weather.location.name}</h2>
      <p>Temperature: {weather.current.temp_c} °C</p>
      <p>Condition: {weather.current.condition.text}</p>
      <img src={weather.current.condition.icon} alt="Weather icon" />
    </div>
  );
};

export default Weather;
