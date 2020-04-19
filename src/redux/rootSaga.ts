import { all } from 'redux-saga/effects';
import { watchSignInSaga } from '../sagas/signInSaga';
import { watchSignOutSaga } from '../sagas/signOutSaga';
import { watchValidatePreviousSessionSaga } from '../sagas/validatePreviousSessionSaga';

export function* rootSaga() {
  yield all([
    watchSignInSaga(),
    watchSignOutSaga(),
    watchValidatePreviousSessionSaga(),
  ]);
}
