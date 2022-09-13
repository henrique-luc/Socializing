import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import DatabasePostReducer from "./modules/AllPosts/reducer";
import DatabaseUserReducer from "./modules/AllUsers/reducer";

const reducers = combineReducers({
  allposts: DatabasePostReducer,
  allusers: DatabaseUserReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
