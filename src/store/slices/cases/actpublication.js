import { createSlice } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
import { dispatch } from "../../index";

/** Начальное состояние
 * @type {{isLoading: string, cases: *[], error: null}}
 */
const initialState = {
  nopublactsisLoading: "false",
  nopublactserror: null,
  nopublacts: [],
  nopublactsall: []
};

const slice = createSlice({
  name: "actpublication",
  initialState,
  reducers: {
    // Начало загрузки
    startLoading(state) {
      state.nopublactsisLoading = "true";
      state.nopublactserror = null;
    },

    // Получили ошибку
    hasError(state, action) {
      state.nopublactsisLoading = "false";
      state.nopublactserror = action.payload;
    },

    // Получение списка для судьи
    getJudgeActPublicationSuccess(state, action) {
      state.nopublactsisLoading = "false";
      state.nopublacts = action.payload;
    },

    // Получение списка всех
    getActPublicationSuccess(state, action) {
      state.nopublactsisLoading = "false";
      state.nopublactsall = action.payload;
    }
  }
});

// Хранилище
export default slice.reducer;

export function getJudgeActPublicationCases() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/gas-api/sudact");
      dispatch(slice.actions.getJudgeActPublicationSuccess(response.data.data));
    } catch (error) {
      dispatch(slice.actions.getJudgeActPublicationSuccess([]));
      dispatch(slice.actions.hasError(error.message));
    }
  };
}

export function getAllActPublicationCases() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/gas-api/sudact/all");
      dispatch(slice.actions.getActPublicationSuccess(response.data.data));
    } catch (error) {
      dispatch(slice.actions.getActPublicationSuccess([]));
      dispatch(slice.actions.hasError(error.message));
    }
  };
}
