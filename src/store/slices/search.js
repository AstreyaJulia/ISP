import { createSlice } from '@reduxjs/toolkit';
import {sub} from "date-fns";
import axios from '../../utils/axios';
import { dispatch } from '../index';
import {formatYyyyMmDdDate} from "../../utils/formatTime";

/** Начальное состояние
 * @type {{isLoading: string, error: null, sea: []}}
 */
const initialState = {
  isLoading: 'false',
  error: null,
  searchResults: [],
};

const slice = createSlice({
  name: 'search',
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
    getSearchSuccess(state, action) {
      state.isLoading = 'false';
      state.searchResults = action.payload;
    },
  },
});

// Хранилище
export default slice.reducer;

const end = new Date();
const start = sub(new Date(), {
  days: 80,
});

export function getSearch(type, query) {
  const searchSettings = {
    users: {},
    inbox: {
      startDate: formatYyyyMmDdDate(start),
      endDate: formatYyyyMmDdDate(end),
    },
    outbox: {
      startDate: formatYyyyMmDdDate(start),
      endDate: formatYyyyMmDdDate(end),
    },
  };

  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(`/search/${type}`, {
        params: {
          query,
          ...searchSettings[type],
        },
      });
      dispatch(slice.actions.getSearchSuccess([]));
      dispatch(slice.actions.getSearchSuccess(response.data.data));
    } catch (error) {
      dispatch(slice.actions.getSearchSuccess([]));
      dispatch(slice.actions.hasError(error.message));
    }
  };
}

export function resetSearch() {
  dispatch(slice.actions.getSearchSuccess([]));

  return {
    type: 'RESET_SEARCH',
  }

}
