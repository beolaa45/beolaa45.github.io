import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import homeReducer from '../reducers/home';

const rootReducer = combineReducers({
    home: homeReducer
})

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );