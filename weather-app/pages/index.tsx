import { useState, useEffect } from 'react';
import { getWeatherData } from '../pages/api/hello';
import WeatherData from '../pages/api/types';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiFog, WiThunderstorm } from 'react-icons/wi';


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

  const getWeatherIcon = (icon: string, size: number = 30) => {
    return (
      <span style={{ fontSize: `${size}px`, marginRight: '5px' }}>
        {getIconComponent(icon)}
      </span>
    );
  };

  const getIconComponent = (icon: string) => {
    switch (icon) {
      case '01d':
        return <WiDaySunny />;
      case '01n':
        return <WiDaySunny />;
      case '02d':
        return <WiCloudy />;
      case '02n':
        return <WiCloudy />;
      case '03d':
      case '03n':
      case '04d':
      case '04n':
        return <WiCloudy />;
      case '09d':
      case '09n':
        return <WiRain />;
      case '10d':
      case '10n':
        return <WiRain />;
      case '11d':
      case '11n':
        return <WiThunderstorm />;
      case '13d':
      case '13n':
        return <WiSnow />;
      case '50d':
      case '50n':
        return <WiFog />;
      default:
        return null; // No specific icon for other conditions
    }
  };

  return (
    <div className='flex flex-col align-center justify-center text-xl'>
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
          {weatherData.weather[0].icon && getWeatherIcon(weatherData.weather[0].icon, 40)}
        </div>
      )}
    </div>
  )
}

