import State from '../../types/State';
import createReducer from '../createReducer';

export default createReducer<State['products']>(
  {
    isFetching: false,
    list: [],
  },
  {},
);
