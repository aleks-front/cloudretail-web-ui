import React, { FunctionComponent } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import ProductItemPage from './ProductItemPage';
import ProductListPage from './ProductListPage';

export const ProductsPage: FunctionComponent<RouteComponentProps> = ({ match }) => (
  <div>
    <Route path={`${match.url}/new`} component={ProductItemPage} />
    <Route path={`${match.url}`} component={ProductListPage} />
  </div>
);

export default ProductsPage;
