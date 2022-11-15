import { createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import { dispatch } from '../index';

/** Начальное состояние
 * @type {{currentError: null, currentWeather: {}, currentIsLoading: string}}
 */
const initialState = {
  currentIsLoading: 'false',
  currentError: null,
  currentWeather: {},
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
  },
});

// Хранилище
export default slice.reducer;

export function getCurrentWeather() {
  return async () => {
    dispatch(slice.actions.currentWeatherStartLoading());
    try {
      const response = await axios({
        method: 'get',
        url: '/weather',
        timeout: 100,
      });
      dispatch(slice.actions.getCurrentWeatherSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.getCurrentWeatherSuccess({}));
      dispatch(slice.actions.currentWeatherHasError(error.message));
    }
  };
}
