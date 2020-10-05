import * as actionTypes from "./actionTypes";
import axios from '../../api/baseApi'

const productsStart = () => {
    return{
        type: actionTypes.FETCH_PRODUCTS_START
    }
}

const productsSuccess = (data) => {
    return{
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        data
    }
}

const productsFail = (error) => {
    return{
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        error
    }
}

export const productsInit = () => {
    return dispatch => {
        dispatch(productsStart())
        axios.get('/products?_start=0&_limit=8')
        .then((data) =>  dispatch(productsSuccess(data)))
        .catch(error => dispatch(productsFail(error)))
    }
}
 