import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import overperiod from "./slices/cases/overperiod";
import actpublication from "./slices/cases/actpublication";
import processed from "./slices/cases/processed";
import calendar from "./slices/calendar";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: []
};

const appReducer = combineReducers({
  overperiod,
  actpublication,
  processed,
  calendar
});

const rootReducer = (state, action) => {

  if (action.type === "logout") {
    storage.removeItem("persist:root");
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export { rootPersistConfig, rootReducer };
