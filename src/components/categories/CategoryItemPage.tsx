import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/slices/categoriesSlice';

export const CategoryItemPage: FunctionComponent = () => {
  const dispatch = useDispatch();

  const addCategory = category => {
    dispatch(actions.addRequest(category));
  };

  return (
    <form autoComplete="off" onSubmit={addCategory}>
      <div>
        <div>
          <button>Save</button>
        </div>
        <div>
          <div>
            <label>Name</label>
            <input type="text" name="name" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default CategoryItemPage;
