import { useState, useEffect } from 'react';
import { getWeatherData } from '../pages/api/hello';
import WeatherData from '../pages/api/types';
import Translations from '../pages/api/translation'
import { WiDaySunny, WiNightClear, WiNightAltCloudy, WiDayCloudy, WiCloudy, WiRain, WiDayRain, WiNightAltRainWind, WiSnow, WiFog, WiThunderstorm, WiCloud } from 'react-icons/wi';

const translations: Record<string, Translations> = {
  en: {
    searchPlaceholder: 'Enter city',
    searchButtonText: 'Search',
    weather: 'Weather',
    description: 'Description',
    temperature: 'Temperature',
    humidity: 'Humidity',
  },
  kr: {
    searchPlaceholder: '도시 찾기',
    searchButtonText: '검색',
    weather: '날씨',
    description: '상세',
    temperature: '온도',
    humidity: '습도',
  }
};

export default function Home() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [language, setLanguage] = useState('en');


  const toggleLanguage = () => {
    // Toggle between 'en' (English) and another language
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'kr' : 'en'));
  };

  const t = (key: keyof Translations) => translations[language][key];


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
      <span style={{ fontSize: `${size}px`, marginRight: '5px' , alignItems: 'center', padding: '5px'}}>
        {getIconComponent(icon)}
      </span>
    );
  };
  

  const getIconComponent = (icon: string) => {
    switch (icon) {
      case '01d':
        return <WiDaySunny />;
      case '01n':
        return <WiNightClear />
      case '02d':
        return <WiDayCloudy />
      case '02n':
        return <WiNightAltCloudy />
      case '03d':
        return <WiCloud />;
      case '03n':
        return <WiCloud />;
      case '04d':
      case '04n':
        return <WiCloudy />;
      case '09d':
      case '09n':
        return <WiRain />;
      case '10d':
        return <WiDayRain />
      case '10n':
        return <WiNightAltRainWind />;
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
      <h1 className="text-4xl mb-6 font-bold">{t('weather')}</h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder={t('searchPlaceholder')}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className='px-4 py-2 mr-3 bg-white border border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300 shadow-md rounded-md'
        />
        <button onClick={handleSearch} className='px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 transition duration-300 shadow-md rounded-md'>
          {t('searchButtonText')}
        </button>
        <button onClick={toggleLanguage} className='ml-3 px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded-md'>
          {language === 'en' ? '🇰🇷' : '🇺🇸'}
        </button>
      </div>
      {weatherData && (
        <div className="mt-4 p-6 bg-white shadow-lg rounded-md">
          <div className="flex flex-row justify-center items-center">
            <p className="text-2xl">{t('weather')}</p>
            <p>{getWeatherIcon(weatherData.weather[0].icon, 70)}</p>
          </div>
          <p className="mb-2">{t('description')}: {weatherData.weather[0].description}</p>
          <p className="mb-2">{t('temperature')}: {weatherData.main.temp}°C</p>
          <p>{t('humidity')}: {weatherData.main.humidity}%</p>
        </div>
      )}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
}
