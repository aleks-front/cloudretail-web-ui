import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { addProductRequest } from '../../redux/actionCreators';

export const ProductItemPage: FunctionComponent<any> = ({ addProduct }) => (
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

export const mapDispatchToProps = {
  addProduct: addProductRequest,
};

export default connect(null, mapDispatchToProps)(ProductItemPage);
