import { useState, useEffect } from 'react';
import { getWeatherData } from '../pages/api/hello';
import WeatherData from '../pages/api/types';

export default function Home() {
  const [city, setCity] = useState(''); // State to manage user input
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      if (city) {
        const data = await getWeatherData(city);
        setWeatherData(data);
        setError(null); // Reset error state on successful fetch
      }
    } catch (error:any) {
      setError(error.message || 'Error fetching weather data. Please try again.');
      // Optionally, you can log the error here or handle it in a different way
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {weatherData && (
        <div>
          <h2>{weatherData.weather[0].main}</h2>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>{weatherData.weather[0].icon}</p>
        </div>
      )}
    </div>
  )
}

