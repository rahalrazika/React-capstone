import { LIST_PRODUCTS, SELECTED_PRODUCT, CLEAR_SELECTED_PRODUCT } from '../actions/actionTypes';

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return { ...state, ...action.payload };
    case CLEAR_SELECTED_PRODUCT:
      return { };
    default:
      return state;
  }
};
