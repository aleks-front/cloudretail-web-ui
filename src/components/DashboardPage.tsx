import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { State } from '../redux/rootReducer';

export const DashboardPage = () => {
  const isSignedIn = useSelector((state: State) => state.auth.isSignedIn);

  if (!isSignedIn) {
    return <Redirect to="/signin" />;
  }

  return <h1>Dashboard</h1>;
};
