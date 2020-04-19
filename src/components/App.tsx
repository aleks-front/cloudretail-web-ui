import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { State } from '../redux/rootReducer';
import { authActions } from '../slices/authSlice';
import { DashboardPage } from './DashboardPage';
import { SignInPage } from './SignInPage';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authActions.validatePreviousSession());
  }, []);

  const auth = useSelector((state: State) => state.auth);

  if (auth.isValidationRequired || auth.isFetchingAuthToken) {
    return null;
  }

  return (
    <Switch>
      <Route path="/signin" component={SignInPage} />
      <Route path="/" component={DashboardPage} />
    </Switch>
  );
};
