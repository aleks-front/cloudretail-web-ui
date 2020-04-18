import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { State } from '../redux/rootReducer';
import { authActions } from '../slices/authSlice';
import { BuildInfo } from './BuildInfo';
import { DashboardPage } from './DashboardPage';
import { GlobalStyles } from './GlobalStyles';
import { SignInPage } from './SignInPage';

const signInPath = '/signin';

export const App = () => {
  const match = useRouteMatch();
  const auth = useSelector((state: State) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.validatePreviousSessionRequest());
  }, []);

  if (
    match.path !== signInPath &&
    !auth.isSignedIn &&
    !auth.isSigningIn &&
    !auth.isValidating
  ) {
    return <Redirect to={signInPath} />;
  }

  return (
    <>
      <GlobalStyles />
      <BuildInfo />
      <Switch>
        <Route path={signInPath} component={SignInPage} />
        <Route path="/" component={DashboardPage} />
      </Switch>
    </>
  );
};
