import { createStore, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//const reducers = state => state; //al iomportarlo desde ./../reducers ya no es necesario tenerlo declarado aquí

export const store = createStore(reducers, {}, 
   composeEnhancers(applyMiddleware(promiseMiddleware)));