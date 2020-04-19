import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SignInRequestPayload {
  username: string;
  password: string;
}

const initialState = {
  isValidationRequired: true,
  isFetchingAuthToken: false,
  isSigningIn: false,
  isSignedIn: false,
};

export const { actions: authActions, reducer: authReducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    validatePreviousSession: (state) => state,
    disableValidationRequire: (state) => ({
      ...state,
      isValidationRequired: false,
    }),
    fetchAuthTokenRequest: (state) => ({
      ...state,
      isFetchingAuthToken: true,
    }),
    fetchAuthTokenSuccess: (state) => ({
      ...state,
      isFetchingAuthToken: false,
      isSignedIn: true,
    }),
    fetchAuthTokenFailure: (state) => ({
      ...state,
      isFetchingAuthToken: false,
      isSignedIn: false,
    }),
    signInRequest: (state, _action: PayloadAction<SignInRequestPayload>) => ({
      ...state,
      isSigningIn: true,
    }),
    signInSuccess: (state) => ({
      ...state,
      isSigningIn: false,
      isSignedIn: true,
    }),
    signInFailure: (state, _action: PayloadAction<Error>) => ({
      ...state,
      isSigningIn: false,
      isSignedIn: false,
    }),
  },
});
