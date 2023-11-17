import { createSlice } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';
import { dispatch } from '../../index';

/** Начальное состояние
 * @type {{isLoading: string, cases: *[], error: null}}
 */
const initialState = {
  nolasteventsisLoading: 'false',
  nolasteventserror: null,
  nolastevents: [],
  nolasteventsall: [],
};

const slice = createSlice({
  name: 'nolastevents',
  initialState,
  reducers: {
    // Начало загрузки
    startLoading(state) {
      state.nolasteventsisLoading = 'true';
      state.nolasteventserror = null;
    },

    // Получили ошибку
    hasError(state, action) {
      state.nolasteventsisLoading = 'false';
      state.nolasteventserror = action.payload;
    },

    // Получение списка для судьи
    getJudgeNoLastEventsSuccess(state, action) {
      state.nolasteventsisLoading = 'false';
      state.nolastevents = action.payload;
    },

    // Получение списка всех
    getAllNoLastEventsSuccess(state, action) {
      state.nolasteventsisLoading = 'false';
      state.nolasteventsall = action.payload;
    },
  },
});

// Хранилище
export default slice.reducer;

export function getJudgeNoLastEventsCases() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/gas-api/no-last-events');
      dispatch(slice.actions.getJudgeNoLastEventsSuccess(response.data.data));
    } catch (error) {
      dispatch(slice.actions.getJudgeNoLastEventsSuccess([]));
      dispatch(slice.actions.hasError(error.message));
    }
  };
}

export function getAllNoLastEventsCases() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/gas-api/no-last-events/all');
      dispatch(slice.actions.getAllNoLastEventsSuccess(response.data.data));
    } catch (error) {
      dispatch(slice.actions.getAllNoLastEventsSuccess([]));
      dispatch(slice.actions.hasError(error.message));
    }
  };
}

export function resetJudgeNoLastEventsCases() {
  dispatch(slice.actions.getJudgeNoLastEventsSuccess([]));

  return {
    type: 'RESET_JNOLASTEVENTS',
  };
}

export function resetAllNoLastEventsCases() {
  dispatch(slice.actions.getAllNoLastEventsSuccess([]));

  return {
    type: 'RESET_ALLJNOLASTEVENTS',
  };
}
