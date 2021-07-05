import {
  LIST_PRODUCTS,
  SELECTED_PRODUCT,
  CLEAR_SELECTED_PRODUCT,
  FILTER_PRODUCTS,
} from './actionTypes';

export const listProducts = (products) => ({
  type: LIST_PRODUCTS,
  payload: products,
});

export const selectedProduct = (product) => ({
  type: SELECTED_PRODUCT,
  payload: product,
});
export const clearSelectedProduct = () => ({
  type: CLEAR_SELECTED_PRODUCT,
});
export const filterProducts = (allData, targetText) => {
  const data = targetText
    ? allData.filter((item) => item.title.toLowerCase().includes(targetText.toLowerCase()))
    : allData;
  return {
    type: FILTER_PRODUCTS,
    data,
  };
};
