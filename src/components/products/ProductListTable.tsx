import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import State from '../../types/State';

export const ProductListTable: FunctionComponent<ReturnType<typeof mapStateToProps>> = ({
  products,
}) => (
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

export const mapStateToProps = (state: State) => ({
  products: state.products.list,
});

export default connect(mapStateToProps)(ProductListTable);
