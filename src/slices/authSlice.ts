import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  isValidating: false,
};

export const { actions: authActions, reducer: authReducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    validatePreviousLoginRequest: (state) => ({
      ...state,
      isValidating: true,
    }),
    validatePreviousLoginSuccess: (state) => ({
      ...state,
      isValidating: false,
      isLoggedIn: true,
    }),
    validatePreviousLoginFailure: (state) => ({
      ...state,
      isValidating: false,
      isLoggedIn: false,
    }),
    loginRequest: (state) => ({
      ...state,
      isLoggingIn: true,
    }),
    loginSuccess: (state) => ({
      ...state,
      isLoggingIn: false,
    }),
    loginFailure: (state) => ({
      ...state,
      isLoggingIn: false,
    }),
  },
});
