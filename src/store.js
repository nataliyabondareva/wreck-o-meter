import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import reducers from "./reducers";
import ReduxThunk from "redux-thunk";
const middlewares = [ReduxThunk];
const middlewareEnhancer = applyMiddleware(ReduxThunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = [middlewareEnhancer];

const composedEnhancers = composeEnhancers(...enhancers);
const combinedReducers = combineReducers({ ...reducers });

const store = createStore(combinedReducers, {}, composedEnhancers);

export default store;