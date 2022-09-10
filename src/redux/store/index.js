import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

const reducers = combineReducers({});

const store = createStore(reducers, applyMiddleware());

export default store;
