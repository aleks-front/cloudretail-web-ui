import { call, put } from 'redux-saga/effects';
import fetchProducts from '../../api/products/fetchProducts';
import { fetchProductsFailure, fetchProductsSuccess } from '../actionCreators';

export default function*() {
  try {
    const products = yield call(fetchProducts);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsFailure(error));
  }
}
