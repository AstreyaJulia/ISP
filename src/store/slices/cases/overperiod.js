import {createSlice} from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
import { dispatch } from '../../index';

/** Начальное состояние
 * @type {{isLoading: string, cases: *[], error: null}}
 */
const initialState = {
    isLoading: 'false',
    error: null,
    cases: [],
};

const slice = createSlice({
    name: 'casesoverperiod',
    initialState,
    reducers: {
        // Начало загрузки
        startLoading(state) {
            state.isLoading = 'true';
        },

        // Получили ошибку
        hasError(state, action) {
            state.isLoading = 'false';
            state.error = action.payload;
        },

        // Получение списка для судьи
        getJudgeOverPeriodSuccess(state, action) {
            state.isLoading = 'false';
            state.cases = action.payload;
        },

        // Получение списка всех
        getAllOverSuccess(state, action) {
            state.isLoading = 'false';
            state.cases = action.payload;
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
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getAllOverPeriodCases() {
    return async () => {
        dispatch(slice.actions.startLoading());
        try {
            const response = await axios.get('/gas-api/deadlines/all');
            dispatch(slice.actions.getJudgeOverPeriodSuccess(response.data.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}
