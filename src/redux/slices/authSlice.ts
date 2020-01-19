import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  creatingDevice: false,
};

export const { actions, reducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    createDeviceRequest: state => ({
      ...state,
      creatingDevice: true,
    }),
    createDeviceSuccess: (state, { payload }) => ({
      ...state,
      creatingDevice: false,
    }),
    createDeviceFailure: (state, { payload }) => ({
      ...state,
      creatingDevice: false,
    }),
  },
});
