import { combineReducers } from 'redux';
import { reducer as auth } from '../reducers/authReducer';

export const rootReducer = combineReducers({
  auth,
});
