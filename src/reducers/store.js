import { createStore } from 'redux';
import rootReducer from './productReducer';

const store = createStore(rootReducer);
export default store;
