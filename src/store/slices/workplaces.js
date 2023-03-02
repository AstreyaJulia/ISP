import {createSlice} from "@reduxjs/toolkit";
import {dispatch} from "../index";
import axios from "../../utils/axios";
import apiErrorHelper from "../../utils/apiErrorHelper";

/** Начальное состояние
 * @type {{isLoading: string, userList: [], error: null}}
 */
const initialState = {
    isLoading: 'false',
    error: null,
    workplacesRoot: [],
    workplacesList: [],
};

const slice = createSlice({
    name: 'workplaces',
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

        // Получение списка рабочих мест
        getWorkplacesRootSuccess(state, action) {
            state.isLoading = 'false';
            state.workplacesRoot = action.payload;
        },

        // Получение списка рабочих мест
        getWorkplacesSuccess(state, action) {
            state.isLoading = 'false';
            state.workplacesList = action.payload;
        },

    },
});

// Хранилище
export default slice.reducer;

export function getWorkPlaceRootList() {
    return async () => {
        dispatch(slice.actions.startLoading());
        try {
            const response = await axios.get('/buildingstructure');
            dispatch(slice.actions.getWorkplacesRootSuccess(response.data.data));
        } catch (error) {
            apiErrorHelper(error)
            dispatch(slice.actions.getWorkplacesRootSuccess([]));
            dispatch(slice.actions.hasError(error.message));
        }
    };
}

export function getWorkPlaceListById(id) {
    return async () => {
        dispatch(slice.actions.startLoading());
        try {
            const response = await axios.get(`/buildingstructure/${id}`);
            dispatch(slice.actions.getWorkplacesSuccess(response.data.data));
        } catch (error) {
            apiErrorHelper(error)
            dispatch(slice.actions.getWorkplacesSuccess([]));
            dispatch(slice.actions.hasError(error.message));
        }
    };
}