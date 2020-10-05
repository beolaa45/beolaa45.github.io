import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import homeReducer from '../reducers/home';
import detailReducer from '../reducers/detail';
import productsReducer from '../reducers/products';

const rootReducer = combineReducers({
    home: homeReducer,
    detail: detailReducer,
    products: productsReducer
})
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  : null || compose;
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );