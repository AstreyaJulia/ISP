import { createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import { dispatch } from '../index';

/** Начальное состояние
 * @type {{isLoading: string, cases: *[], error: null}}
 */
const initialState = {
    isLoading: 'false',
    error: null,
    gcategory: [],
    mcategory: [],
};

const slice = createSlice({
    name: 'casescategory',
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

        // Получение списка для судьи
        getGcategorySuccess(state, action) {
            state.isLoading = 'false';
            state.gcategory = action.payload;
        },

        // Получение списка всех
        getMcategorySuccess(state, action) {
            state.isLoading = 'false';
            state.mcategory = action.payload;
        },
    },
});

// Хранилище
export default slice.reducer;

export function getGcategory() {

    return async () => {
        dispatch(slice.actions.startLoading());
        try {
            const response = await axios.get('/gas-api/categories-civil-cases');
            dispatch(slice.actions.getGcategorySuccess(response.data.data));
        } catch (error) {
            dispatch(slice.actions.getGcategorySuccess([]));
            dispatch(slice.actions.hasError(error.message));
        }
    };
}

export function getMcategory() {
    return async () => {
        dispatch(slice.actions.startLoading());
        try {
            const response = await axios.get('/gas-api/categories-material');
            dispatch(slice.actions.getMcategorySuccess(response.data.data));
        } catch (error) {
            dispatch(slice.actions.getMcategorySuccess([]));
            dispatch(slice.actions.hasError(error.message));
        }
    };
}

export function resetGcategory() {
    dispatch(slice.actions.getGcategorySuccess([]));

    return {
        type: 'RESET_GCAT',
    };
}

export function resetMcategory() {
    dispatch(slice.actions.getMcategorySuccess([]));

    return {
        type: 'RESET_MCAT',
    };
}
