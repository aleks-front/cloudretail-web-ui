import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../redux/rootReducer';

export const CategoryListTable: FunctionComponent = () => {
  const categories = useSelector((state: State) => state.categories.list);

  return (
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
};

export default CategoryListTable;
