import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from './reducers';
import thunk from 'redux-thunk';

const initialState = {};
const middleware = [thunk];

const combinedReducer =  combineReducers(reducers);

const store = createStore(
  combinedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

