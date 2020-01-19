import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../redux/rootReducer';

export const ProductListTable: FunctionComponent = () => {
  const products = useSelector((state: State) => state.products.list);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductListTable;
