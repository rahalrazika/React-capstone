import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './productReducer';

const rootReducer = combineReducers({
  listOfProduct: productReducer,
  product: selectedProductReducer,

});
export default rootReducer;
