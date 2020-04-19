import { call, put, takeEvery } from 'redux-saga/effects';
import { validatePreviousSession } from '../api/validatePreviousSession';
import { authTokenKey } from '../constants';
import { authActions } from '../slices/authSlice';

export function* validatePreviousSessionSaga() {
  const authToken = localStorage.getItem(authTokenKey);
  if (authToken) {
    yield put(authActions.fetchAuthTokenRequest());
    try {
      const result = yield call(validatePreviousSession, authToken);
      yield put(authActions.fetchAuthTokenSuccess(result));
    } catch (error) {
      console.error(error);
      yield put(authActions.fetchAuthTokenFailure());
      localStorage.removeItem(authTokenKey);
    }
  }
}

export function* watchValidatePreviousSessionSaga() {
  yield takeEvery(
    authActions.validatePreviousSession.type,
    validatePreviousSessionSaga
  );
}
