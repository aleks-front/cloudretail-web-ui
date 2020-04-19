import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { signInPath } from '../constants';
import { State } from '../redux/rootReducer';
import { authActions } from '../slices/authSlice';
import { DashboardPage } from './DashboardPage';
import { SignInPage } from './SignInPage';

export const App = () => {
  const isFetchingAuthToken = useSelector(
    (state: State) => state.auth.isFetchingAuthToken
  );
  const dispatch = useDispatch();
  const [isValidationRequired, setValidationRequired] = useState(true);
  useEffect(() => {
    dispatch(authActions.validatePreviousSession());
    setValidationRequired(false);
  }, []);

  if (isValidationRequired || isFetchingAuthToken) {
    return null;
  }

  return (
    <Switch>
      <Route path={signInPath} component={SignInPage} />
      <Route path="/" component={DashboardPage} />
    </Switch>
  );
};
