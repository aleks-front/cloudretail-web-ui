import { all } from 'redux-saga/effects';
import { watchSignInSaga } from '../sagas/signInSaga';
import { watchValidatePreviousSessionSaga } from '../sagas/validatePreviousSessionSaga';

export function* rootSaga() {
  yield all([watchValidatePreviousSessionSaga(), watchSignInSaga()]);
}
