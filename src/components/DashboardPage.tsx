import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { State } from '../redux/rootReducer';
import { authActions } from '../slices/authSlice';

export const DashboardPage = () => {
  const isSignedIn = useSelector((state: State) => state.auth.isSignedIn);
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(authActions.signOutRequest());
  };

  if (!isSignedIn) {
    return <Redirect to="/signin" />;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
};
