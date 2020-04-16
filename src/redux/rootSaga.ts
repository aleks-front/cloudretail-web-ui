import { all } from 'redux-saga/effects';
import { validatePreviousLoginSaga } from '../sagas/validatePreviousLoginSaga';

export function* rootSaga() {
  yield all([validatePreviousLoginSaga()]);
}
