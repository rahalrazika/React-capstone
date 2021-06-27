import { LIST_PRODUCTS } from '../actions/actionTypes';

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_PRODUCTS:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

export default productReducer;
