import { all } from 'redux-saga/effects';
import { validatePreviousSessionSaga } from '../sagas/validatePreviousSessionSaga';

export function* rootSaga() {
  yield all([validatePreviousSessionSaga()]);
}
