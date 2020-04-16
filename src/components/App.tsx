import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../redux/store';
import { authActions } from '../slices/authSlice';
import { BuildInfo } from './BuildInfo';
import { GlobalStyles } from './GlobalStyles';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.validatePreviousLoginRequest());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <BuildInfo />
        <h1>Cloud Retail</h1>
      </BrowserRouter>
    </Provider>
  );
};
