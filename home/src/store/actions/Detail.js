import * as actionTypes from "./actionTypes";
import axios from '../../api/baseApi'

export const detailStart = () => {
    return{
        type: actionTypes.FETCH_DETAIL_START
    }
}

export const detailSuccess = (data) => {
    return{
        type: actionTypes.FETCH_DETAIL_SUCCESS,
        data
    }
}

export const detailFail = (error) => {
    return{
        type: actionTypes.FETCH_DETAIL_FAIL,
        error
    }
}

export const detailInit = (id) => {
    return dispatch => {

    }
}