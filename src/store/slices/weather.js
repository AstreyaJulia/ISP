import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { dispatch } from '../index';
import { CITY_LAT, CITY_LON, OPEN_WEATHER_API_KEY } from '../../config';
import apiErrorHelper from '../../utils/apiErrorHelper';

/** Начальное состояние
 * @type {{currentError: null, currentWeather: {}, currentIsLoading: string}}
 */
const initialState = {
  currentIsLoading: 'false',
  currentError: null,
  currentWeather: {},
};

/** Адрес Open Weather
 * @type {string}
 */
const OPEN_WEATHER_API_CURRENT = 'https://openweathermap.org/data/2.5/onecall';

const getParams = {
  appid: OPEN_WEATHER_API_KEY,
  lat: CITY_LAT,
  lon: CITY_LON,
};

const slice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    // Начало загрузки текущей погоды
    currentWeatherStartLoading(state) {
      state.currentIsLoading = 'true';
      state.currentError = null;
    },

    // Получили ошибку получения текущей погоды
    currentWeatherHasError(state, action) {
      state.currentIsLoading = 'false';
      state.currentError = action.payload;
    },

    // Получение текущей погоды
    getCurrentWeatherSuccess(state, action) {
      state.currentIsLoading = 'false';
      state.currentWeather = action.payload;
    },

    // Начало загрузки прогноза погоды
    forecastWeatherStartLoading(state) {
      state.forecastIsLoading = 'true';
      state.forecastError = null;
    },

    // Получили ошибку получения прогноза погоды
    forecastWeatherHasError(state, action) {
      state.forecastIsLoading = 'false';
      state.forecastError = action.payload;
    },

    // Получение прогноза погоды
    getForecastWeatherSuccess(state, action) {
      state.forecastIsLoading = 'false';
      state.forecastWeather = action.payload;
    },
  },
});

// Хранилище
export default slice.reducer;

export function getCurrentWeather() {
  return async () => {
    dispatch(slice.actions.currentWeatherStartLoading());
    try {
      const response = await axios.get(OPEN_WEATHER_API_CURRENT, {
        params: {
          ...getParams,
        },
      });
      dispatch(slice.actions.getCurrentWeatherSuccess(response.data));
    } catch (error) {
      apiErrorHelper(error);
      dispatch(slice.actions.getCurrentWeatherSuccess({}));
      dispatch(slice.actions.currentWeatherHasError(error.message));
    }
  };
}

