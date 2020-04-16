import { call, takeEvery } from 'redux-saga/effects';
import { validatePreviousLogin } from '../api/validatePreviousLogin';
import { authActions } from '../slices/authSlice';

export function* validatePreviousLoginSaga() {
  const authToken = localStorage.getItem('auth_token');
  if (authToken) {
    yield call(validatePreviousLogin, { authToken });
  }
}

export function* watchValidatePreviousLoginSaga() {
  yield takeEvery(
    authActions.validatePreviousLoginRequest.type,
    validatePreviousLoginSaga
  );
}
