import React, { useState } from 'react';
import { getWeatherData } from '../pages/api/hello';
import WeatherData from '../pages/api/types';
import Translations from '../pages/api/translation';
import getWeatherDescription from './cases/despription_kr';
import getWeatherIcon from './cases/icon';
import getClothingRecommendation from './cases/recommendation';
import { FaSearch } from "react-icons/fa";


const translations: Record<string, Translations> = {
  en: {
    searchPlaceholder: 'Enter city',
    weather: 'Weather',
    description: 'Description',
    temperature: 'Temperature',
    humidity: 'Humidity',
    feels_like: 'Feels-Like',
    cloth_Recommed: 'Cloth Recommend',
    error1: 'Error: Invalid city. Please enter a valid city name.',
  },
  kr: {
    searchPlaceholder: '도시 찾기',
    weather: '날씨',
    description: '상세',
    temperature: '온도',
    humidity: '습도',
    feels_like: '체감온도',
    cloth_Recommed: '옷 추천',
    error1: '에러: 유효하지 않은 도시입니다',
  },
};

export default function Home() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [translatedCity, setTranslatedCity] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [language, setLanguage] = useState('en');
  const t = (key: keyof Translations) => translations[language][key];

  const handleSearch = async () => {
    try {
      if (city) {
        const encodedCity = encodeURIComponent(city);
        const data = await getWeatherData(encodedCity);
        setWeatherData(data);
        setError(null);
      }
    } catch (error: any) {
      setError(error.message || t('error1'));
    }
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'kr' : 'en'));
  };

  const clothRecommendation = () => {
    try {
      if (weatherData?.main?.feels_like) {
        const feelTemp = Math.round(weatherData.main.feels_like);
        const recommendation = getClothingRecommendation(feelTemp);
        return recommendation;
      }
    } catch (error: any) {
      setError(error.message || 'Error: Unable to fetch clothing data. Please try again.');
    }
  };

  return (
    <main className='flex flex-col items-center justify-center text-xl min-h-screen bg-gray-200 text-gray-800'>
      <h1 className='text-4xl mb-6 font-bold'>{t('weather')}</h1>
      <div className='flex items-center'>
        <input
          type='text'
          id='cityInput'
          autoComplete='off'
          placeholder={t('searchPlaceholder')}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className='w-full px-8 py-2 m-3 bg-white border border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300 shadow-md rounded-md'
        />
        <button
          onClick={handleSearch}
          className='px-3 py-3 my-3 bg-gray-800 text-white hover:bg-gray-700 transition duration-300 shadow-md rounded-md'
        >
          <FaSearch />
        </button>
        <button
          onClick={toggleLanguage}
          className='ml-3 px-2 py-2 mx-2 bg-gray-300 hover:bg-gray-400 rounded-md'
        >
          {language === 'en' ? '🇰🇷' : '🇺🇸'}
        </button>
      </div>
      {weatherData && (
        <div className='mt-4 m-4 p-6 bg-white shadow-lg rounded-md'>
          <div className='flex flex-row justify-center items-center'>
            <p className='text-2xl'>{t('weather')}</p>
            <p>{getWeatherIcon(weatherData.weather[0].icon, 70)}</p>
          </div>
          <p className='mb-2'>
            {t('description')}: {language === 'en' ? weatherData.weather[0].description : getWeatherDescription(weatherData.weather[0].id)}
          </p>
          <p className='mb-2'>
            {t('temperature')}: {Math.round(weatherData.main.temp)}°C
          </p>
          <p className='mb-2'>
            {t('feels_like')}: {Math.round(weatherData.main.feels_like)}°C
          </p>
          <p className='mb-2'>
            {t('humidity')}: {weatherData.main.humidity}%
          </p>
          <p>{t('cloth_Recommed')}: {clothRecommendation()}</p>
        </div>
      )}
      {error && <p className='mt-4 text-red-500'>{error}</p>}
    </main>
  );
}
