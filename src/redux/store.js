// src/redux/store.js
import { applyMiddleware, createStore } from 'redux';

//import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware';
import createHistory from 'history/createBrowserHistory';
//import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducer from './reducer';


export const history = createHistory();
// Build the middleware for intercepting and dispatching navigation actions
//const myRouterMiddleware = routerMiddleware(history);
export const store = createStore(reducer, applyMiddleware(thunk, promise()));