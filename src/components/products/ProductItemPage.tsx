import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/slices/productsSlice';

export const ProductItemPage: FunctionComponent = () => {
  const dispatch = useDispatch();

  const addProduct = product => {
    dispatch(actions.addRequest(product));
  };

  return (
    <form autoComplete="off" onSubmit={addProduct}>
      <div>
        <div>
          <button>Save</button>
        </div>
        <div>
          <div>
            <label>Name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>Price</label>
            <input type="number" name="price" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductItemPage;
