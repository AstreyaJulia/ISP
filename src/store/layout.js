import {createSlice} from "@reduxjs/toolkit";

/** FIXME заменить на получение настроек от сервера */
/** Меню узкое или широкое
 * @returns {any|boolean}
 */
const initialMenuCollapsed = () => {
    const item = window.localStorage.getItem("menuCollapsed")
    /** Парсинг сохраненного json, если его нет, возвращает initialValue */
    return item ? JSON.parse(item) : false
}

/** Тема
 * @returns {any|string}
 */
const initialSkin = () => {
    const item = window.localStorage.getItem("skin");
    /** Парсинг сохраненного json, если его нет, возвращает initialValue */
    return item ? JSON.parse(item) : "light";
}

/** Хранилище для раскладки
 * @type {Object<{menuCollapsed: *, skin: *}, {handleSkin: reducers.handleSkin, handleLayout: reducers.handleLayout, handleLastLayout: reducers.handleLastLayout, handleMenuCollapsed: reducers.handleMenuCollapsed}, string>}
 */
export const layoutSlice = createSlice({
    name: "layout",
    initialState: {
        skin: initialSkin(),
        menuCollapsed: initialMenuCollapsed()
    },
    reducers: {
        handleSkin: (state, action) => {
            state.skin = action.payload;
            window.localStorage.setItem("skin", JSON.stringify(action.payload));
            /* FIXME сюда добавить отправку на сервер настройки */
        },
        handleMenuCollapsed: (state, action) => {
            state.menuCollapsed = action.payload;
            window.localStorage.setItem("menuCollapsed", JSON.stringify(action.payload));
            /* FIXME сюда добавить отправку на сервер настройки */
        },
        handleLastLayout: (state, action) => {
            state.lastLayout = action.payload;
        },
        handleLayout: (state, action) => {
            state.layout = action.payload;
        }
    }
})

export const {
    handleSkin,
    handleMenuCollapsed,
    handleLastLayout,
    handleLayout
} = layoutSlice.actions

export default layoutSlice.reducer;
