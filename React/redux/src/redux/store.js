import { createStore } from 'redux';
import reducer from './subscribers/reducer'


const store =  createStore(reducer);     //make store

export default store;