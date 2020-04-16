import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../redux/store';
import { BuildInfo } from './BuildInfo';
import { GlobalStyles } from './GlobalStyles';

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyles />
      <BuildInfo />
      <h1>Cloud Retail</h1>
    </BrowserRouter>
  </Provider>
);
