import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import createSagaMiddleware from 'redux-saga';

import { Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';

import reducer from './reducer';
import saga from './saga';

import './index.css';
import HomePage from './HomePage';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createBrowserHistory();

// mount it on the Store
const store = createStore(
  connectRouter(history)(reducer),
  {},
  composeEnhancers(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(history),
    ),
  ),
);

// then run the saga
sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </ConnectedRouter>
  </Provider>
  ,document.getElementById('root')
);
registerServiceWorker();
