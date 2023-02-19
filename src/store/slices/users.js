import { createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import { dispatch } from '../index';
import apiErrorHelper from '../../utils/apiErrorHelper';

/** Начальное состояние
 * @type {{isLoading: string, userList: [], error: null}}
 */
const initialState = {
  isLoading: 'false',
  error: null,
  userList: [],
  usersBirthdays: [],
};

const slice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    // Начало загрузки
    startLoading(state) {
      state.isLoading = 'true';
      state.error = null;
    },

    // Получили ошибку
    hasError(state, action) {
      state.isLoading = 'false';
      state.error = action.payload;
    },

    // Получение списка сотрудников
    getPhonebookSuccess(state, action) {
      state.isLoading = 'false';
      state.userList = action.payload;
    },

    // Получение списка др
    getBirthdaysSuccess(state, action) {
      state.isLoading = 'false';
      state.usersBirthdays = action.payload;
    },
  },
});

// Хранилище
export default slice.reducer;

export function getPhonebookList() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/users');
      dispatch(slice.actions.getPhonebookSuccess(response.data.data));
    } catch (error) {
      apiErrorHelper(error)
      dispatch(slice.actions.getPhonebookSuccess([]));
      dispatch(slice.actions.hasError(error.message));
    }
  };
}

export function getBirthdaysList() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/users/birthday');
      dispatch(slice.actions.getBirthdaysSuccess(response.data.data));
    } catch (error) {
      apiErrorHelper(error)
      dispatch(slice.actions.getBirthdaysSuccess([]));
      dispatch(slice.actions.hasError(error.message));
    }
  };
}
