import { LIST_PRODUCTS, SELECTED_PRODUCT } from '../actions/actionTypes';

const initialState = {
  products: [
    { id: 1, product: 'Mouse', price: 2 },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_PRODUCTS:
      return state;
    case SELECTED_PRODUCT:
      return state;
    default:
      return state;
  }
};
export default productReducer;
