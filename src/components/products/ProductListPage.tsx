import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import ProductListTable from './ProductListTable';
import ProductListToolbar from './ProductListToolbar';

export const ProductListPage: FunctionComponent<RouteComponentProps> = () => (
  <div>
    <div>
      <ProductListToolbar />
    </div>
    <div>
      <ProductListTable />
    </div>
  </div>
);

export default ProductListPage;
