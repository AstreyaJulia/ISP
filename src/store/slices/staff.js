import { createSlice } from '@reduxjs/toolkit';
import { dispatch } from '../index';
import axios from '../../utils/axios';
import apiErrorHelper from '../../utils/apiErrorHelper';

/** Начальное состояние
 * @type {{isLoading: string, userList: [], error: null}}
 */
const initialState = {
  isLoading: 'false',
  error: null,
  staffList: [],
  staffUser: {}
};

const slice = createSlice({
  name: 'staff',
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
    getStaffSuccess(state, action) {
      state.isLoading = 'false';
      state.staffList = action.payload;
    },

    // Получение инфо сотрудника
    getStaffUserSuccess(state, action) {
      state.isLoading = 'false';
      state.staffUser = action.payload;
    },

  },
});

// Хранилище
export default slice.reducer;

export function getStaffList() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/staff');
      dispatch(slice.actions.getStaffSuccess(response.data.data));
    } catch (error) {
      apiErrorHelper(error)
      dispatch(slice.actions.getStaffSuccess([]));
      dispatch(slice.actions.hasError(error.message));
    }
  };
}

export function getStaffInfoById (id) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(`/staff/${id}`);
      dispatch(slice.actions.getStaffUserSuccess(response.data.data[0]));
    } catch (error) {
      apiErrorHelper(error)
      dispatch(slice.actions.getStaffUserSuccess({}));
      dispatch(slice.actions.hasError(error.message));
    }
  };
}
