import { useState, useEffect } from 'react';
import { getWeatherData } from '../pages/api/hello';
import WeatherData from '../pages/api/types';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiFog, WiThunderstorm } from 'react-icons/wi';

export default function Home() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      if (city) {
        const data = await getWeatherData(city);
        setWeatherData(data);
        setError(null);
      }
    } catch (error: any) {
      setError(error.message || 'Error fetching weather data. Please try again.');
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
        return null;
    }
  };

  return (
    <div className='flex flex-col items-center justify-center text-xl h-svh bg-gray-200 text-gray-800'>
      <h1 className="text-4xl mb-6 font-bold">Weather App</h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className='px-4 py-2 mr-3 bg-white border border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300'
        />
        <button onClick={handleSearch} className='px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition duration-300'>
          Search
        </button>
      </div>
      {weatherData && (
        <div className="mt-8 p-6 bg-white shadow-lg rounded-md">
          <h2 className="text-2xl mb-2">{weatherData.weather[0].main}</h2>
          <p className="mb-2">Description: {weatherData.weather[0].description}</p>
          <p className="mb-2">Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <div className="mt-4">
            <p>Weather Icon: {getWeatherIcon(weatherData.weather[0].icon, 40)}</p>
          </div>
        </div>
      )}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
}
