import { createSlice } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
import { dispatch } from "../../index";

/** Начальное состояние
 * @type {{isLoading: string, cases: *[], error: null}}
 */
const initialState = {
  processedisLoading: "false",
  processederror: null,
  processedcases: [],
  processedcasesall: []
};

const slice = createSlice({
  name: "processed",
  initialState,
  reducers: {
    // Начало загрузки
    startLoading(state) {
      state.processedisLoading = "true";
      state.processederror = null;
    },

    // Получили ошибку
    hasError(state, action) {
      state.processedisLoading = "false";
      state.processederror = action.payload;
    },

    // Получение списка для судьи
    getJudgeProcessedSuccess(state, action) {
      state.processedisLoading = "false";
      state.processedcases = action.payload;
    },

    // Получение списка всех
    getAllProcessedSuccess(state, action) {
      state.processedisLoading = "false";
      state.processedcasesall = action.payload;
    }
  }
});

// Хранилище
export default slice.reducer;

export function getJudgeProcessedCases() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/gas-api/materials-production");
      dispatch(slice.actions.getJudgeProcessedSuccess(response.data.data));
    } catch (error) {
      dispatch(slice.actions.getJudgeProcessedSuccess([]));
      dispatch(slice.actions.hasError(error.message));
    }
  };
}

export function getAllProcessedCases() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/gas-api/materials-production/all");
      dispatch(slice.actions.getAllProcessedSuccess(response.data.data));
    } catch (error) {
      dispatch(slice.actions.getAllProcessedSuccess([]));
      dispatch(slice.actions.hasError(error.message));
    }
  };
}
