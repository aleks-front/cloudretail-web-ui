import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { App } from './components/App';
import { BuildInfo } from './components/BuildInfo';
import { GlobalStyles } from './components/GlobalStyles';
import { history } from './history';
import { store } from './redux/store';

ReactDOM.render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      <Router history={history}>
        <BuildInfo />
        <App />
      </Router>
    </Provider>
  </>,
  document.getElementById('app')
);
