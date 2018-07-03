import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';

import registerServiceWorker from './registerServiceWorker';

import reducer from './reducer';
import saga from './saga';

import './index.css';
import Routes from './Routes';

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

sagaMiddleware.run(saga);

function hashLinkScroll() {
  const { pathname } = window.location;
  console.log(pathname);
  if (pathname !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const element = document.getElementById(pathname);
      if (element) element.scrollIntoView();
    }, 0);
  }
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} onUpdate={hashLinkScroll}>
      <Routes/>
    </ConnectedRouter>
  </Provider>
  ,document.getElementById('root')
);
registerServiceWorker();
