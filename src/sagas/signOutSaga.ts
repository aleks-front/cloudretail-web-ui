import { call, put, select, takeEvery } from 'redux-saga/effects';
import { signOut } from '../api/signOut';
import { signInPath } from '../constants';
import { history } from '../history';
import { State } from '../redux/rootReducer';
import { authActions } from '../slices/authSlice';

export function* signOutSaga() {
  const state: State = yield select((state: State) => state);
  const { id: authTokenId } = state.auth.authToken;
  try {
    yield call(signOut, authTokenId);
    yield put(authActions.signOutSuccess());
    history.push(signInPath);
  } catch (error) {
    console.error(error);
    yield put(authActions.signOutFailure(error));
  }
}

export function* watchSignOutSaga() {
  yield takeEvery(authActions.signOutRequest.type, signOutSaga);
}
