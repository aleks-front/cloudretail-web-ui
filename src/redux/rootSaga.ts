import { all, takeLatest } from 'redux-saga/effects';
import { fetchCategoriesRequest, fetchProductsRequest } from './actionCreators';
import fetchCategoriesSaga from './sagas/fetchCategoriesSaga';
import fetchProductsSaga from './sagas/fetchProductsSaga';

export default function*() {
  yield all([
    takeLatest(fetchCategoriesRequest.type, fetchCategoriesSaga),
    takeLatest(fetchProductsRequest.type, fetchProductsSaga),
  ]);
}
