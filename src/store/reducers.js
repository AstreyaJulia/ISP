import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import overperiod from "./slices/cases/overperiod";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: []
};

const appReducer = combineReducers({
  overperiod
});

const rootReducer = (state, action) => {

  if (action.type === "logout") {
    storage.removeItem("persist:root");
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export { rootPersistConfig, rootReducer };
