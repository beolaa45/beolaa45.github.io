import * as actionTypes from "../actions/actionTypes";
import { immutableObject } from '../actions/uilities';

const initalState = {
    data: null,
    loading: false,
    error: null
}

const productsStart = (state, action) => {
   return immutableObject(state, {loading: true})
}

const productsSuccess = (state, action) => {
    return immutableObject(state, {loading: false, data: action.data})
}

const productsFail = (state, action) => {
    return immutableObject(state, {loading: false, error: action.error})
}
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCTS_START:
            return productsStart(state, action)
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return productsSuccess(state, action)
        case actionTypes.FETCH_PRODUCTS_FAIL:
            return productsFail(state, action)
        default:
            return state
            
    }
}

export default reducer;