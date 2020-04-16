import { takeEvery } from 'redux-saga/effects';
import { authActions } from '../slices/authSlice';

export function* authSaga() {}

export function* watchAuthSaga() {
  yield takeEvery(authActions.validatePreviousLoginRequest.type, authSaga);
}
