import { call, put, takeEvery } from 'redux-saga/effects';
import createDevice from '../../api/createDevice';
import { actions } from '../slices/authSlice';

export function* createDeviceSaga() {
  try {
    const device = yield call(createDevice);
    yield put(actions.createDeviceSuccess(device));
  } catch (error) {
    yield put(actions.createDeviceFailure(error));
  }
}

export default function*() {
  yield takeEvery(actions.createDeviceRequest.type, createDeviceSaga);
}
