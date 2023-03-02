import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import overperiod from './slices/cases/overperiod';
import actpublication from './slices/cases/actpublication';
import processed from './slices/cases/processed';
import calendar from './slices/calendar';
import phonebook from './slices/users';
import weather from './slices/weather';
import search from './slices/search';
import linkscatalog from './slices/linkscatalog';
import nolastevents from './slices/cases/nolastevents';
import casescategory from './slices/casescategory';
import staff from './slices/staff';

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const appReducer = combineReducers({
  overperiod,
  actpublication,
  processed,
  calendar,
  phonebook,
  weather,
  search,
  linkscatalog,
  nolastevents,
  casescategory,
  staff,
});

const rootReducer = (state, action) => {
  if (action.type === 'logout') {
    storage.removeItem('persist:root');
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export { rootPersistConfig, rootReducer };
