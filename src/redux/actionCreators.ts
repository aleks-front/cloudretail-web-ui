import createActionFactory from './createActionFactory';

export const addCategoryRequest = createActionFactory('addCategoryRequest');
export const addCategorySuccess = createActionFactory('addCategorySuccess');
export const addCategoryFailure = createActionFactory<Error>('addCategoryFailure');

export const addProductRequest = createActionFactory('addProductRequest');
export const addProductSuccess = createActionFactory('addProductSuccess');
export const addProductFailure = createActionFactory<Error>('addProductFailure');

export const fetchCategoriesRequest = createActionFactory('fetchCategoriesRequest');
export const fetchCategoriesSuccess = createActionFactory('fetchCategoriesSuccess');
export const fetchCategoriesFailure = createActionFactory<Error>('fetchCategoriesFailure');

export const fetchProductsRequest = createActionFactory('fetchProductsRequest');
export const fetchProductsSuccess = createActionFactory('fetchProductsSuccess');
export const fetchProductsFailure = createActionFactory<Error>('fetchProductsFailure');
