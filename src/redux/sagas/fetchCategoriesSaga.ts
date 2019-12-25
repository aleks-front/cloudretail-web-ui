import { call, put } from 'redux-saga/effects';
import fetchCategories from '../../api/categories/fetchCategories';
import { fetchCategoriesFailure, fetchCategoriesSuccess } from '../actionCreators';

export default function*() {
  try {
    const categories = yield call(fetchCategories);
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}
