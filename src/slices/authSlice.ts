import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SignInRequestPayload {
  username: string;
  password: string;
}

const initialState = {
  authToken: null,
  isFetchingAuthToken: false,
  isSigningIn: false,
  isSigningOut: false,
  isSignedIn: false,
};

export const { actions: authActions, reducer: authReducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    validatePreviousSession: (state) => state,
    fetchAuthTokenRequest: (state) => ({
      ...state,
      isFetchingAuthToken: true,
    }),
    fetchAuthTokenSuccess: (state, { payload }: PayloadAction<any>) => ({
      ...state,
      authToken: payload,
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
    signInSuccess: (state, { payload }: PayloadAction<any>) => ({
      ...state,
      authToken: payload,
      isSigningIn: false,
      isSignedIn: true,
    }),
    signInFailure: (state, _action: PayloadAction<Error>) => ({
      ...state,
      isSigningIn: false,
      isSignedIn: false,
    }),
    signOutRequest: (state) => ({ ...state, isSigningOut: true }),
    signOutSuccess: (state) => ({ ...state, isSigningOut: false }),
    signOutFailure: (state, _action: PayloadAction<Error>) => ({
      ...state,
      isSigningOut: false,
    }),
  },
});
