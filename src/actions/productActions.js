import { LIST_PRODUCTS, SELECTED_PRODUCT } from './actionTypes';

export const listProducts = (products) => ({
  type: LIST_PRODUCTS,
  payload: products,
});

export const selectedProduct = (products) => ({
  type: SELECTED_PRODUCT,
  payload: products,
});