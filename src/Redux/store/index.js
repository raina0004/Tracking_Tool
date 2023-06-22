// src/store/index.js

import { createStore, applyMiddleware, compose } from 'redux';
import authReducer from '../reducers/authReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  authReducer,
  composeEnhancers(applyMiddleware(/* add any middleware you need */))
);

export default store;
