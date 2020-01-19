import { call, put, takeLatest } from 'redux-saga/effects';
import fetchCategories from '../../api/fetchCategories';
import { actions } from '../slices/categoriesSlice';

export function* fetchCategoriesSaga() {
  try {
    const categories = yield call(fetchCategories);
    yield put(actions.fetchListSuccess(categories));
  } catch (error) {
    yield put(actions.fetchListFailure(error));
  }
}

export default function*() {
  yield takeLatest(actions.fetchListRequest.type, fetchCategoriesSaga);
}
