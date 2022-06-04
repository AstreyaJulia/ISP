import {createSlice} from "@reduxjs/toolkit";

/** Начальное состояние JWT из localstorage
 * @returns {any}
 */
const initialJWT = () => {
    const item = window.localStorage.getItem("jwt");
    /** Парсинг сохраненного json или возвратить initialValue */
    return item ? JSON.parse(item) : {};
}

export const authSlice = createSlice({
    name: "authentication",
    initialState: {
        jwt: initialJWT()
    },
    reducers: {
        handleLogin: (state, action) => {
            state["jwt"] = action.payload["jwt"];
            localStorage.setItem("jwt", JSON.stringify(action.payload.jwt));
        },
        handleLogout: state => {
            state["jwt"] = null;
            /** Удалить токен из localStorage */
            localStorage.removeItem("jwt");
        }
    }
})

export const {handleLogin, handleLogout} = authSlice.actions;

export default authSlice.reducer;
