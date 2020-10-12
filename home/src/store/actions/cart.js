import * as actionTypes from "./actionTypes";
import axios from '../../api/baseApi'


export const cartStart = () => {
    return{
        type: actionTypes.FETCH_CART_ADD_START
    }
}

export const cartSuccess = (data) => {
    console.log("success")
    return{
        type: actionTypes.FETCH_CART_ADD_SUCCESS,
        data
    }
}

export const cartFail = (error) => {
    return{
        type: actionTypes.FETCH_CART_ADD_FAIL,
        error
    }
}
export const cartInit = (id) => {
    return dispatch => {
        dispatch(cartStart())
       axios.get("/products/" + id)
       .then((data) =>{
           console.log(data)
        dispatch(cartSuccess(data))
        
       })
    //    .catch(error => cartFail(error))
    }
}