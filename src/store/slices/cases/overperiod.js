import { createSlice } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';
import { dispatch } from '../../index';

/** Начальное состояние
 * @type {{isLoading: string, cases: *[], error: null}}
 */
const initialState = {
  overperiodisLoading: 'false',
  overperioderror: null,
  overperiodcases: [],
  overperiodcasesall: [],
};

const slice = createSlice({
  name: 'casesoverperiod',
  initialState,
  reducers: {
    // Начало загрузки
    startLoading(state) {
      state.overperiodisLoading = 'true';
      state.overperioderror = null;
    },

    // Получили ошибку
    hasError(state, action) {
      state.overperiodisLoading = 'false';
      state.overperioderror = action.payload;
    },

    // Получение списка для судьи
    getJudgeOverPeriodSuccess(state, action) {
      state.overperiodisLoading = 'false';
      state.overperiodcases = action.payload;
    },

    // Получение списка всех
    getAllOverSuccess(state, action) {
      state.overperiodisLoading = 'false';
      state.overperiodcasesall = action.payload;
    },
  },
});

// Хранилище
export default slice.reducer;

export function getJudgeOverPeriodCases() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/gas-api/deadlines');
      dispatch(slice.actions.getJudgeOverPeriodSuccess(response.data.data));
    } catch (error) {
      dispatch(slice.actions.getJudgeOverPeriodSuccess([]));
      dispatch(slice.actions.hasError(error.message));
    }
  };
}

export function getAllOverPeriodCases() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/gas-api/deadlines/all');
      dispatch(slice.actions.getAllOverSuccess(response.data.data));
    } catch (error) {
      dispatch(slice.actions.getAllOverSuccess([]));
      dispatch(slice.actions.hasError(error.message));
    }
  };
}

export function resetJudgeOverPeriodCases() {
  dispatch(slice.actions.getJudgeOverPeriodSuccess([]));

  return {
    type: 'RESET_JOVERPERIOD',
  };
}

export function resetAllOverPeriodCases() {
  dispatch(slice.actions.getAllOverSuccess([]));

  return {
    type: 'RESET_ALLOVERPERIOD',
  };
}
