import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: FunctionComponent = () => (
  <nav>
    <ul>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/categories">Categories</NavLink>
      <NavLink to="/products">Products</NavLink>
    </ul>
  </nav>
);

export default Navbar;
