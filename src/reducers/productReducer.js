import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

const productReducer = (state = initialState.products, action) => {
    switch(action.type) {
        case types.LOAD_PRODUCTS_SUCCESS:
            return action.products;
        case types.SAVE_PRODUCT_SUCCESS:
            return [
                ...state, 
                Object.assign({}, action.product)
            ]
        default:
            return state;
    }
}

export default productReducer;