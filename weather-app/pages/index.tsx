import { useState } from 'react';
import { getWeatherData } from '../pages/api/hello';
import WeatherData from '../pages/api/types';
import Translations from '../pages/api/translation'
import getWeatherDescription from './cases/despription_kr'
import getWeatherIcon from './cases/icon';

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

  const handleSearch = async () => {
    try {
      if (city) {
        const encodedCity = encodeURIComponent(city);
        // console.log('Encoded City:', encodedCity); 
        const data = await getWeatherData(encodedCity);
        setWeatherData(data);
        setError(null);
      }
    } catch (error: any) {
      setError(error.message || 'Error fetching weather data. Please try again.');
    }
  };

  const toggleLanguage = () => {
    // Toggle between 'en' (English) and another language
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'kr' : 'en'));
  };

  const t = (key: keyof Translations) => translations[language][key];



  return (
    <main className='flex flex-col items-center justify-center text-xl h-screen bg-gray-200 text-gray-800'>
      <h1 className="text-4xl mb-6 font-bold">{t('weather')}</h1>
      <div className="flex items-center">
        <input
          type="text"
          id="cityInput"
          autoComplete="off"
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
          <p className="mb-2">{t('description')}: {language === 'en' ? weatherData.weather[0].description : getWeatherDescription(weatherData.weather[0].id)}</p>
          <p className="mb-2">{t('temperature')}: {Math.round(weatherData.main.temp)}°C</p>
          <p>{t('humidity')}: {weatherData.main.humidity}%</p>
        </div>
      )}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </main>
  );
}
