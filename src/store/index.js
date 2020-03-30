import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import allReducers from "../reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function mainStore(preloadedState) {
  return createStore(
    allReducers,
    preloadedState,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );
}

export default mainStore;
