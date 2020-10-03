import * as actionTypes from "./actionTypes";
import axios from '../../api/baseApi'
export const homeStart = () => {
    return{
        type: actionTypes.FETCH_HOME_START
    }
}

export const homeSuccess = (data) => {
    return{
        type: actionTypes.FETCH_HOME_SUCCESS,
        data
    }
}
export const homeFail = (error) => {
    return{
        type: actionTypes.FETCH_HOME_FAIL,
        error
    }
}

export const homeShowModal = (id) => {
    return{
        type: actionTypes.FETCH_HOME_SHOW_MODAL,
        id
    }
}

export const start = () => {
    return dispatch => { 
        dispatch(homeStart())
        axios.get("/products")
        .then(data => {
            dispatch(homeSuccess(data))
        })
        .catch(error => dispatch(homeFail(error)))
    }
}