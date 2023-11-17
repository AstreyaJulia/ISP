import { createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import { dispatch } from '../index';
import apiErrorHelper from '../../utils/apiErrorHelper';

/** Начальное состояние
 * @type {{isLoading: string, error: null, sea: []}}
 */
const initialState = {
  isGroupLoading: 'false',
  isLinkLoading: 'false',
  errorGroups: null,
  errorLinks: null,
  groups: [],
  links: [],
};

const slice = createSlice({
  name: 'linkscatalog',
  initialState,
  reducers: {
    // Начало загрузки
    startGroupsLoading(state) {
      state.isGroupLoading = 'true';
      state.errorGroups = null;
    },

    // Начало загрузки
    startLinksLoading(state) {
      state.isLinkLoading = 'true';
      state.errorLinks = null;
    },

    // Получили ошибку
    hasGroupsError(state, action) {
      state.isGroupLoading = 'false';
      state.errorGroups = action.payload;
    },

    // Получили ошибку
    hasLinksError(state, action) {
      state.isLinkLoading = 'false';
      state.errorLinks = action.payload;
    },

    // Получение списка групп
    getGroupsSuccess(state, action) {
      state.isGroupLoading = 'false';
      state.groups = action.payload;
    },

    // Получение списка ссылок
    getLinksSuccess(state, action) {
      state.isLinkLoading = 'false';
      state.links = action.payload;
    },
  },
});

// Хранилище
export default slice.reducer;

export function getGroups() {
  return async () => {
    dispatch(slice.actions.startGroupsLoading());
    try {
      const response = await axios.get(`/proxylist/group`);
      dispatch(slice.actions.getGroupsSuccess(response.data.data));
    } catch (error) {
      apiErrorHelper(error)
      dispatch(slice.actions.hasGroupsError(error.message));
    }
  };
}

export function getLinks(id) {
  return async () => {
    dispatch(slice.actions.startLinksLoading());
    try {
      const response = await axios.get(`/proxylist/group-link/${id}`);
      dispatch(slice.actions.getLinksSuccess(response.data.data));
    } catch (error) {
      apiErrorHelper(error)
      dispatch(slice.actions.hasLinksError(error.message));
    }
  };
}

export function resetLinks() {
  dispatch(slice.actions.getLinksSuccess([]));

  return {
    type: 'RESET_LINKS',
  };
}

export function resetGroups() {
  dispatch(slice.actions.getGroupsSuccess([]));

  return {
    type: 'RESET_GROUPS',
  };
}
