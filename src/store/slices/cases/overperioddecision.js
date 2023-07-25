import { createSlice } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';
import { dispatch } from '../../index';
import CasesOverPeriodDecisionWidget from "../../../pages/Home/widgets/CasesOverPeriodDecisionWidget";

/** Начальное состояние
 * @type {{isLoading: string, cases: *[], error: null}}
 */
const initialState = {
  overperioddecisionisLoading: 'false',
  overperioddecisionerror: null,
  overperioddecisioncases: [],
  overperioddecisioncasesall: [],
};

const slice = createSlice({
  name: 'casesoverperioddecision',
  initialState,
  reducers: {
    // Начало загрузки
    startLoading(state) {
      state.overperioddecisionisLoading = 'true';
      state.overperioddecisionerror = null;
    },

    // Получили ошибку
    hasError(state, action) {
      state.overperioddecisionisLoading = 'false';
      state.overperioddecisionerror = action.payload;
    },

    // Получение списка для судьи
    getJudgeOverPeriodDecisionSuccess(state, action) {
      state.overperioddecisionisLoading = 'false';
      state.overperioddecisioncases = action.payload;
    },

    // Получение списка всех
    getAllOverDecisionSuccess(state, action) {
      state.overperioddecisionisLoading = 'false';
      state.overperioddecisioncasesall = action.payload;
    },
  },
});

// Хранилище
export default slice.reducer;

export function getJudgeOverPeriodDecisionCases() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/gas-api/overperioddecision');
      dispatch(slice.actions.getJudgeOverPeriodDecisionSuccess(response.data.data));
    } catch (error) {
      dispatch(slice.actions.getJudgeOverPeriodDecisionSuccess([]));
      dispatch(slice.actions.hasError(error.message));
    }
  };
}

export function getAllOverPeriodDecisionCases() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/gas-api/overperioddecision/all');
      dispatch(slice.actions.getAllOverDecisionSuccess(response.data.data));
    } catch (error) {
      dispatch(slice.actions.getAllOverDecisionSuccess([]));
      dispatch(slice.actions.hasError(error.message));
    }
  };
}

export function resetJudgeOverPeriodDecisionCases() {
  dispatch(slice.actions.getJudgeOverPeriodDecisionSuccess([]));

  return {
    type: 'RESET_JOVERPERIODDECISION',
  };
}

export function resetAllOverPeriodDecisionCases() {
  dispatch(slice.actions.getAllOverDecisionSuccess([]));

  return {
    type: 'RESET_ALLOVERPERIODDECISION',
  };
}
