import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './index';

// const store = createStore(rootReducer);
const store = createStore(rootReducer, composeWithDevTools());
export default store;
