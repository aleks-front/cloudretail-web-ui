import { all } from 'redux-saga/effects';
import fetchCategoriesSaga from './sagas/fetchCategoriesSaga';
import fetchProductsSaga from './sagas/fetchProductsSaga';

export default function*() {
  yield all([fetchCategoriesSaga(), fetchProductsSaga()]);
}
