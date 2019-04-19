import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import initialState from './initialState';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, initialState, applyMiddleware(thunk))

export default store;