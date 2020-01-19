import { combineReducers } from 'redux';
import { reducer as categories } from './slices/categoriesSlice';
import { reducer as products } from './slices/productsSlice';

const rootReducer = combineReducers({
  categories,
  products,
});

export type State = ReturnType<typeof rootReducer>;

export default rootReducer;
