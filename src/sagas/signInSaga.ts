import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { signIn } from '../api/signIn';
import { authTokenKey } from '../constants';
import { history } from '../history';
import { authActions, SignInRequestPayload } from '../slices/authSlice';

export function* signInSaga({ payload }: PayloadAction<SignInRequestPayload>) {
  try {
    const result = yield call(signIn, payload);
    yield put(authActions.signInSuccess());
    localStorage.setItem(authTokenKey, result.id);
    history.push('/');
  } catch (error) {
    yield put(authActions.signInFailure(error));
  }
}

export function* watchSignInSaga() {
  yield takeEvery(authActions.signInRequest.type, signInSaga);
}
