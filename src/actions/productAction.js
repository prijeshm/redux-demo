import * as types from './actionTypes';
import productApi from '../api/productApi';


export function getAllProducts() {
    return dispatch => {
        return productApi.getAllProducts().then(response => {
            dispatch(getAllProductsSuccess(response))
        })
    }
}

function getAllProductsSuccess(products) {
    return {
        type: types.LOAD_PRODUCTS_SUCCESS,
        products
    }
}

export function saveProduct(product) {
    return dispatch => {
        return productApi.saveProduct(product).then(response => {
            dispatch(saveProductSuccess(response))
        })
    }
}

function saveProductSuccess(product) {
    return {
        type: types.SAVE_PRODUCT_SUCCESS,
        product
    }
}