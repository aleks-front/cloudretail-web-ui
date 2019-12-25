import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

export const CategoryListToolbar: FunctionComponent = () => (
  <div>
    <NavLink to="/categories/new">New</NavLink>
  </div>
);

export default CategoryListToolbar;
