import { createStore } from 'redux';
import reducer from './reducers/postReducer';

const store = createStore(reducer);
console.log(store.getState());
