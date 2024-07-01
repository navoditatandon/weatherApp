import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const locationResponse = await axios.get('https://www.metaweather.com/api/location/search/', {
          params: {
            query: 'London'
          }
        });

        const woeid = locationResponse.data[0].woeid;

        const weatherResponse = await axios.get(`https://www.metaweather.com/api/location/${woeid}/`);
        setWeatherData(weatherResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error.message); // Log the specific error message
        setError('Failed to fetch data. Please check your network connection.');
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <h2>London</h2>
      {error ? (
        <p>{error}</p>
      ) : weatherData ? (
        <WeatherCard weather={weatherData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;


//axios.get("url",{{params: "navo"}})

/*

  try {}
  catch (error) {}
*/

// import React, { useState, useEffect } from 'react';

// const WeatherApp = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const apiKey = 'YOUR_API_KEY'; // Replace with your Weatherstack API key
//   const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=New%20York`;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setWeatherData(data);
//       } catch (error) {
//         console.error('Error fetching data: ', error);
//       }
//     };

//     fetchData();
//   }, [apiUrl]);

//   return (
//     <div>
//       <h1>Weather App</h1>
//       {weatherData && (
//         <div>
//           <h2>{weatherData.location.name}, {weatherData.location.country}</h2>
//           <p>Temperature: {weatherData.current.temperature}°C</p>
//           <p>Weather Description: {weatherData.current.weather_descriptions[0]}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherApp;


// try{
//  let response = await fetch(apiUrl);
//  if(!response.ok){
//   throw new Error("Network issue");
//  }
//  const data = await response.json();
//  setWeather(data);
// }
// catch (error) {
//   console.log(error);
// }