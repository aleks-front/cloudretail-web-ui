import { all } from 'redux-saga/effects';
import createDeviceSaga from './sagas/createDeviceSaga';
import fetchCategoriesSaga from './sagas/fetchCategoriesSaga';
import fetchProductsSaga from './sagas/fetchProductsSaga';

export default function*() {
  yield all([createDeviceSaga(), fetchCategoriesSaga(), fetchProductsSaga()]);
}
