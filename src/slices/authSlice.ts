import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSignedIn: false,
  isSigningIn: false,
  isValidating: false,
};

export const { actions: authActions, reducer: authReducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    validatePreviousSessionRequest: (state) => ({
      ...state,
      isValidating: true,
    }),
    validatePreviousSessionSuccess: (state) => ({
      ...state,
      isValidating: false,
      isSignedIn: true,
    }),
    validatePreviousSessionFailure: (state) => ({
      ...state,
      isValidating: false,
      isSignedIn: false,
    }),
    signInRequest: (state) => ({
      ...state,
      isSigningIn: true,
    }),
    signInSuccess: (state) => ({
      ...state,
      isSigningIn: false,
    }),
    signInFailure: (state) => ({
      ...state,
      isSigningIn: false,
    }),
  },
});
