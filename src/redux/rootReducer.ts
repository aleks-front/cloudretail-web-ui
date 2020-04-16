import { combineReducers } from 'redux';
import { authReducer as auth } from '../slices/authSlice';

export const rootReducer = combineReducers({
  auth,
});

export type State = ReturnType<typeof rootReducer>;
