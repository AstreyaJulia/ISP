import {combineReducers} from "redux";
import layout from "./layout";
import auth from "./authentication";
import userData from "./userData";
import calendar from "../pages/apps/calendar/store";

/** Корневое хранилище, объединяем все хранилища
 * FIXME добавлять новые хранилища сюда
 * @type {Reducer<CombinedState<unknown>>}
 */
const rootReducer = combineReducers({
    /** Публичные */
    layout,
    auth,
    userData,
    calendar
});

export default rootReducer;