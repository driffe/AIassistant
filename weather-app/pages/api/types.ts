// types.ts
interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  
  interface Main {
    temp: number;
    feels_like: number;
    humidity: number;
  }
  
  interface WeatherData {
    weather: Weather[];
    main: Main;
  }
  
  export default WeatherData;
  