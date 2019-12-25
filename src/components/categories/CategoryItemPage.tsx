import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { addCategoryRequest } from '../../redux/actionCreators';

export const CategoryItemPage: FunctionComponent<typeof mapDispatchToProps> = ({ addCategory }) => (
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

export const mapDispatchToProps = {
  addCategory: addCategoryRequest,
};

export default connect(null, mapDispatchToProps)(CategoryItemPage);
