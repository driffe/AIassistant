import React from 'react';
import { WiDaySunny, WiNightClear, WiNightAltCloudy, WiDayCloudy, WiCloudy, WiRain, WiDayRain, WiNightAltRainWind, WiSnow, WiFog, WiThunderstorm, WiCloud } from 'react-icons/wi';

const getWeatherIcon = (icon: string, size: number = 30): React.ReactNode => {
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
      <span style={{ fontSize: `${size}px`, marginRight: '5px' , alignItems: 'center', padding: '5px'}}>
        {getIconComponent(icon)}
      </span>
    );
  };
  
  export default getWeatherIcon;
