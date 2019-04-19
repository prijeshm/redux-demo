import { combineReducers } from 'redux';
import categories from './categoryReducer';
import products from './productReducer'

const rootReducer = combineReducers({
    categories,
    products
})

export default rootReducer;