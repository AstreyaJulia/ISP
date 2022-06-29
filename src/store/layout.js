import {createSlice} from "@reduxjs/toolkit";
import {setAuthorization} from "../utils/Helpers/api_helper";
import axios from "axios";

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

/** Смена темы в базе
 * @param theme
 * @returns {Promise<string|*|string>}
 */
const changeTheme = async (theme) => {
    if (localStorage.getItem("jwt")) {
        setAuthorization(localStorage.getItem("jwt").replace(/['"]+/g, '').toString())
    }
    const response = await axios.post("users/login-data", {"theme": theme});
    if (response.data) {
        return response.data.theme.toString() === "1" ? "light" : "dark";
    } else return initialSkin();
};

const changeMenuCollapsed = async (sidebar) => {
    if (localStorage.getItem("jwt")) {
        setAuthorization(localStorage.getItem("jwt").replace(/['"]+/g, '').toString())
    }
    const response = await axios.post("users/login-data", {"sidebar": sidebar});
    if (response.data) {
        return response.data.sidebar.toString() === "1" ? true : false;
    } else return initialMenuCollapsed();
};

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
        },
        handleChangeSkin: (state, action) => {
            state.skin = action.payload;
            changeTheme(action.payload === "dark" ? "0" : "1").then(r =>
                window.localStorage.setItem("skin", JSON.stringify(r))
            )
        },
        handleMenuCollapsed: (state, action) => {
            state.menuCollapsed = action.payload;
            window.localStorage.setItem("menuCollapsed", JSON.stringify(action.payload));
        },
        handleChangeMenuCollapsed: (state, action) => {
            state.menuCollapsed = action.payload;
            changeMenuCollapsed(action.payload === false ? "0" : "1").then(r =>
                window.localStorage.setItem("menuCollapsed", JSON.stringify(r))
            )
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
    handleChangeSkin,
    handleMenuCollapsed,
    handleChangeMenuCollapsed,
    handleLastLayout,
    handleLayout
} = layoutSlice.actions

export default layoutSlice.reducer;
