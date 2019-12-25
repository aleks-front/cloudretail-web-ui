import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import State from '../../types/State';

export const CategoryListTable: FunctionComponent<ReturnType<typeof mapStateToProps>> = ({
  categories,
}) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Products</th>
      </tr>
    </thead>
    <tbody>
      {categories.map(category => (
        <tr key={category.id}>
          <td>{category.name}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export const mapStateToProps = (state: State) => ({
  categories: state.categories.list,
});

export default connect(mapStateToProps)(CategoryListTable);
