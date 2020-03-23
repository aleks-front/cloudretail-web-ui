import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  isValidating: false,
};

export const { actions, reducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    validatePreviousLoginRequest: (state) => ({
      ...state,
      isValidating: true,
    }),
    validatePreviousLoginResponse: (state) => ({
      ...state,
      isValidating: false,
      isLoggedIn: true,
    }),
    loginRequest: (state) => ({
      ...state,
      isLoggingIn: true,
    }),
    loginResponse: (state) => ({
      ...state,
      isLoggingIn: false,
    }),
  },
});
