// WeatherCard.js
import React from 'react';

const WeatherCard = ({ weather }) => {
  const { title, consolidated_weather } = weather;
  const { weather_state_name, the_temp, min_temp, max_temp, humidity } = consolidated_weather[0];

  return (
    <div className="weather-card">
      <h2>{title}</h2>
      <div>{weather_state_name}</div>
      <div>Temperature: {the_temp.toFixed(2)}°C</div>
      <div>Min Temperature: {min_temp.toFixed(2)}°C</div>
      <div>Max Temperature: {max_temp.toFixed(2)}°C</div>
      <div>Humidity: {humidity}%</div>
    </div>
  );
};

export default WeatherCard;
