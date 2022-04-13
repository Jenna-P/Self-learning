import { createStore } from 'redux';
import rootReducer from './rootReducer';

const store =  createStore(rootReducer);     //make store

export default store;