import * as actionTypes from "../actions/actionTypes"
import { immutableObject } from '../actions/uilities'
const initalState = {
    data: null,
    loading: false,
    error: null,
    show: false,
    idItem: null
}

const homeStart = (state, action) => {
   return immutableObject(state, {loading: true})
}

const homeSuccess = (state, action) => {
    return immutableObject(state, {data: action.data, loading: false,})
}

const homeFail = (state, action) => {
    return immutableObject(state, { loading: false, error: action.error})
}

const homeShowModal = (state, action) => {
    return immutableObject(state, { show: !state.show, idItem: action.id})
}


const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_HOME_START:
            return homeStart(state, action)
        case actionTypes.FETCH_HOME_SUCCESS:
            return homeSuccess(state, action)
        case actionTypes.FETCH_HOME_FAIL:
            return homeFail(state, action)
        case actionTypes.FETCH_HOME_SHOW_MODAL:
            return homeShowModal(state, action)
        default:
            
            return state
            
    }
}

export default reducer;