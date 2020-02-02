import { takeEvery } from 'redux-saga/effects';
import { actions } from '../reducers/authReducer';

export function* authSaga() {}

export function* watchAuthSaga() {
  yield takeEvery(actions.validatePreviousLoginRequest.type, authSaga);
}
