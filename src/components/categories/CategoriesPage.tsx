import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { Route } from 'react-router-dom';
import CategoryItemPage from './CategoryItemPage';
import CategoryListPage from './CategoryListPage';

export const CategoriesPage: FunctionComponent<RouteComponentProps> = ({
  match,
}) => (
  <div>
    <Route path={`${match.url}/new`} component={CategoryItemPage} />
    <Route path={`${match.url}`} component={CategoryListPage} />
  </div>
);

export default CategoriesPage;
