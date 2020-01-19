import { call, put, takeLatest } from 'redux-saga/effects';
import fetchProducts from '../../api/products/fetchProducts';
import { actions } from '../slices/productsSlice';

export function* fetchProductsSaga() {
  try {
    const products = yield call(fetchProducts);
    yield put(actions.fetchListSuccess(products));
  } catch (error) {
    yield put(actions.fetchListFailure(error));
  }
}

export default function*() {
  yield takeLatest(actions.fetchListRequest.type, fetchProductsSaga);
}
