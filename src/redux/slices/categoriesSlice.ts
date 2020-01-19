import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFetching: false,
  list: [],
};
export const { actions, reducer } = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    fetchListRequest: state => state,
    fetchListSuccess: (state, { payload }) => state,
    fetchListFailure: (state, { payload }) => state,
    addRequest: (state, { payload }) => state,
  },
});
