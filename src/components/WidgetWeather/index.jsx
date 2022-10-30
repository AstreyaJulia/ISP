import React, { useEffect, useState } from 'react';
import clearday from '../../assets/images/weather/clear-day.svg';
import cloudy from '../../assets/images/weather/cloudy.svg';
import drizzle from '../../assets/images/weather/drizzle.svg';
import dust from '../../assets/images/weather/dust.svg';
import dustWind from '../../assets/images/weather/dust-wind.svg';
import cloudsExtreme from '../../assets/images/weather/extreme.svg';
import drizzleExtreme from '../../assets/images/weather/extreme-drizzle.svg';
import sleetExtreme from '../../assets/images/weather/extreme-sleet.svg';
import snowExtreme from '../../assets/images/weather/extreme-snow.svg';
import rainExtreme from '../../assets/images/weather/extreme-rain.svg';
import fog from '../../assets/images/weather/fog.svg';
import hurricane from '../../assets/images/weather/hurricane.svg';
import mist from '../../assets/images/weather/mist.svg';
import overcast from '../../assets/images/weather/overcast.svg';
import partlycloudy from '../../assets/images/weather/partly-cloudy-day.svg';
import rain from '../../assets/images/weather/rain.svg';
import sleet from '../../assets/images/weather/sleet.svg';
import smoke from '../../assets/images/weather/smoke.svg';
import snow from '../../assets/images/weather/snow.svg';
import thunderstorms from '../../assets/images/weather/thunderstorms.svg';
import thunderstormsExtreme from '../../assets/images/weather/thunderstorms-extreme.svg';
import thunderstormsRainExtreme from '../../assets/images/weather/thunderstorms-extreme-rain.svg';
import thunderstormsRain from '../../assets/images/weather/thunderstorms-rain.svg';
import wind from '../../assets/images/weather/wind.svg';

export const WidgetWeather = ({ currentWeather, currentIsLoading, currentError }) => {
  const [weather, setWeather] = useState(currentWeather ?? {});

  useEffect(() => {
    setWeather({ ...currentWeather });
    // eslint-disable-next-line
  }, [currentIsLoading]);

  const weatherStates = {
    200: { desc: 'гроза с небольшим дождем', icon: thunderstormsRain },
    201: { desc: 'гроза с дождем', icon: thunderstormsRain },
    202: { desc: 'гроза с сильным дождем', icon: thunderstormsRainExtreme },
    210: { desc: 'небольшая гроза', icon: thunderstorms },
    212: { desc: 'сильная гроза', icon: thunderstorms },
    221: { desc: 'очень сильная гроза', icon: thunderstormsExtreme },
    230: { desc: 'гроза с мелким дождем', icon: thunderstormsRain },
    231: { desc: 'гроза с средним дождем', icon: thunderstormsRain },
    232: { desc: 'гроза с сильным дождем', icon: thunderstormsRainExtreme },
    300: { desc: 'слабая морось', icon: drizzle },
    301: { desc: 'морось', icon: drizzle },
    302: { desc: 'сильная морось', icon: drizzle },
    310: { desc: 'слабый моросящий дождь', icon: drizzleExtreme },
    311: { desc: 'моросящий дождь', icon: drizzleExtreme },
    312: { desc: 'сильный моросящий дождь', icon: drizzleExtreme },
    313: { desc: 'ливневый дождь и морось', icon: rainExtreme },
    314: { desc: 'ливневый дождь и изморось', icon: rainExtreme },
    321: { desc: 'ливень', icon: rainExtreme },
    500: { desc: 'небольшой дождь', icon: rain },
    501: { desc: 'умеренный дождь', icon: rain },
    502: { desc: 'сильный дождь', icon: rain },
    503: { desc: 'очень сильный дождь', icon: rain },
    504: { desc: 'сильный дождь', icon: rain },
    511: { desc: 'ледяной дождь', icon: rain },
    520: { desc: 'слабый ливневый дождь', icon: rain },
    521: { desc: 'ливень', icon: rain },
    522: { desc: 'сильный ливневый дождь', icon: rain },
    531: { desc: 'частично ливневый дождь', icon: rain },
    600: { desc: 'легкий снег', icon: snow },
    601: { desc: 'снег', icon: snow },
    602: { desc: 'сильный снегопад', icon: snow },
    611: { desc: 'мокрый снег', icon: sleet },
    612: { desc: 'слабый мокрый снег', icon: sleet },
    613: { desc: 'ливень с мокрым снегом', icon: sleetExtreme },
    615: { desc: 'небольшой дождь и снег', icon: sleet },
    616: { desc: 'дождь со снегом', icon: sleet },
    620: { desc: 'небольшой снегопад', icon: snowExtreme },
    621: { desc: 'снегопад', icon: snowExtreme },
    622: { desc: 'сильный снегопад', icon: snowExtreme },
    701: { desc: 'туман', icon: fog },
    711: { desc: 'дым', icon: smoke },
    721: { desc: 'дымка', icon: smoke },
    731: { desc: 'песчано-пыльные вихри', icon: dustWind },
    741: { desc: 'смог', icon: mist },
    751: { desc: 'песок', icon: dust },
    761: { desc: 'пыль', icon: dust },
    762: { desc: 'вулканический пепел', icon: dust },
    771: { desc: 'шквал', icon: wind },
    781: { desc: 'смерч', icon: hurricane },
    800: { desc: 'безоблачно', icon: clearday },
    801: { desc: 'небольшая облачность: 11-25%', icon: partlycloudy },
    802: { desc: 'средняя облачность: 25-50%', icon: cloudy },
    803: { desc: 'высокая облачность: 51-84%', icon: overcast },
    804: { desc: 'очень высокая облачность: 85-100%', icon: cloudsExtreme },
  };

  return (
    <div className="flex items-center justify-between bg-blue-600 rounded-md relative">
      {currentError === null && weather?.weather ? (
        <>
          <div className="flex flex-col gap-1 p-3">
            <p className="flex items-center gap-2 text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span>{weather?.name}</span>
            </p>
            <p className="font-bold text-2xl text-gray-100">
              {Math.ceil(weather?.main?.temp) > 0
                ? `+ ${Math.ceil(weather?.main?.temp)}`
                : Math.ceil(weather?.main?.temp)}
              <sup className="font-medium text-sm">
                <span>
                  <sup className="ml-1">o</sup>C
                </span>
              </sup>
            </p>
          </div>

          <div className="flex flex-col items-end justify-end h-full">
            <img
              title={weather?.weather[0]?.description}
              src={weatherStates[weather?.weather[0]?.id].icon}
              alt={weather?.weather[0]?.description}
              className="w-24 h-24"
            />
          </div>

          <div className="flex flex-col justify-strength h-full border-l border-white/50 px-3 gap-3">
            <p className="text-white flex items-center gap-3 text-base" title="Влажность">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-white"
              >
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
              {weather?.main?.humidity} %
            </p>

            <p className="text-white flex items-center gap-3 text-base" title="Влажность">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-white"
              >
                <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
              </svg>
              {weather?.wind?.speed} м/с
            </p>
          </div>
        </>
      ) : (
        <p className="text-base font-medium text-gray-100 flex items-center gap-3 p-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
          Ошибка обновления погоды
        </p>
      )}
    </div>
  );
};
