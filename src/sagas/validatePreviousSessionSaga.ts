import { call, put, takeEvery } from 'redux-saga/effects';
import { validatePreviousSession } from '../api/validatePreviousSession';
import { authActions } from '../slices/authSlice';

export function* validatePreviousSessionSaga() {
  yield put(authActions.disableValidationRequire());
  const authToken = localStorage.getItem('auth_token');
  if (authToken) {
    yield put(authActions.fetchAuthTokenRequest());
    try {
      yield call(validatePreviousSession, authToken);
      yield put(authActions.fetchAuthTokenSuccess());
    } catch (error) {
      yield put(authActions.fetchAuthTokenFailure());
    }
  }
}

export function* watchValidatePreviousSessionSaga() {
  yield takeEvery(
    authActions.validatePreviousSession.type,
    validatePreviousSessionSaga
  );
}
