import { call, takeEvery } from 'redux-saga/effects';
import { validatePreviousSession } from '../api/validatePreviousSession';
import { authActions } from '../slices/authSlice';

export function* validatePreviousSessionSaga() {
  const authToken = localStorage.getItem('auth_token');
  if (authToken) {
    yield call(validatePreviousSession, { authToken });
  }
}

export function* watchValidatePreviousSessionSaga() {
  yield takeEvery(
    authActions.validatePreviousSessionRequest.type,
    validatePreviousSessionSaga
  );
}
