import { combineReducers } from 'redux';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  listOfProduct: productReducer,
});
export default rootReducer;
