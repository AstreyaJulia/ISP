import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import overperiod from "./slices/cases/overperiod";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: []
};

const rootReducer = combineReducers({
  overperiod
});

export { rootPersistConfig, rootReducer };
