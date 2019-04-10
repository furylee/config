import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import App from './App';
import reducers from './reducer';
import './global.less'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
));

ReactDom.render(
  (<Provider store={ store }>
      <App />
  </Provider>),
  document.getElementById('root'),
);
