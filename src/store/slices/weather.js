import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { dispatch } from "../index";
import {CITY_LAT, CITY_LON, OPEN_WEATHER_API_KEY} from "../../config";

/** Начальное состояние
 * @type {{currentError: null, currentWeather: {}, currentIsLoading: string}}
 */
const initialState = {
  currentIsLoading: "false",
  currentError: null,
  currentWeather: {}
};

/** Адрес Open Weather
 * @type {string}
 */
const OPEN_WEATHER_API_CURRENT = "https://api.openweathermap.org/data/2.5/weather";
const OPEN_WEATHER_API_FORECAST = "https://api.openweathermap.org/data/2.5/forecast";

const getParams = {
  lat: CITY_LAT, lon: CITY_LON, appid: OPEN_WEATHER_API_KEY, units: "metric", lang: "ru"
};

const slice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    // Начало загрузки текущей погоды
    currentWeatherStartLoading(state) {
      state.currentIsLoading = "true";
      state.currentError = null;
    },

    // Получили ошибку получения текущей погоды
    currentWeatherHasError(state, action) {
      state.currentIsLoading = "false";
      state.currentError = action.payload;
    },

    // Получение текущей погоды
    getCurrentWeatherSuccess(state, action) {
      state.currentIsLoading = "false";
      state.currentWeather = action.payload;
    }

  }
});

// Хранилище
export default slice.reducer;

export function getCurrentWeather() {
  return async () => {
    dispatch(slice.actions.currentWeatherStartLoading());
    try {
      const response = await axios.get(OPEN_WEATHER_API_CURRENT, {
        params: {
         ...getParams
        }
      });
      dispatch(slice.actions.getCurrentWeatherSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.getCurrentWeatherSuccess({}));
      dispatch(slice.actions.currentWeatherHasError(error.message));
    }
  };
}
