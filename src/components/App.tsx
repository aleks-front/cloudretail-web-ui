import React, { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';
import CategoriesPage from './categories/CategoriesPage';
import Navbar from './Navbar';
import ProductsPage from './products/ProductsPage';

export const App: FunctionComponent = () => (
  <div>
    <Navbar />
    <Route path="/categories" component={CategoriesPage} />
    <Route path="/products" component={ProductsPage} />
  </div>
);

export default App;
