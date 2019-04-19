import * as types from './actionTypes';
import categoryApi from '../api/categoryApi';

export const loadCategories = () => {
    return dispatch => {
        return categoryApi.getAllCategories()
        .then(response => 
            dispatch(loadCategoriesSuccess(response))
        )
    }
}

const loadCategoriesSuccess = (categories) => {
    return {
        type: types.LOAD_CATEGORIES_SUCCESS,
        categories
    }
}