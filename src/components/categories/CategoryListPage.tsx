import React, { FunctionComponent } from 'react';
import CategoryListTable from './CategoryListTable';
import CategoryListToolbar from './CategoryListToolbar';

export const CategoryListPage: FunctionComponent = () => (
  <div>
    <div>
      <CategoryListToolbar />
    </div>
    <div>
      <CategoryListTable />
    </div>
  </div>
);

export default CategoryListPage;
