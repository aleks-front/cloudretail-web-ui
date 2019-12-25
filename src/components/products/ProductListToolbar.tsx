import React from 'react';
import { NavLink } from 'react-router-dom';

export const ProductListToolbar = () => (
  <div>
    <NavLink to="/products/new">New</NavLink>
  </div>
);

export default ProductListToolbar;
