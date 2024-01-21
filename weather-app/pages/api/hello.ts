// utils/weatherApi.ts
import axios, { AxiosResponse } from 'axios';
import WeatherData from '../api/types';

const API_KEY = 'f360980915ef2b3cee4dc672bd81e81b';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherData = async (city: string): Promise<WeatherData> => {
  try {
    const response: AxiosResponse<WeatherData> = await axios.get(API_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric', 
      },
    });

    return response.data;
  } catch (error) {
    // Handle the error based on your application's requirements
    console.error('Error fetching weather data:', error);

    // You might want to throw the error again to let the component handle it
    throw error;
  }
};
