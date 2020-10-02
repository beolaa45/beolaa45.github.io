import * as actionTypes from "../actions/actionTypes"
import { immutableObject } from '../actions/uilities'
const initalState = {
    data: null,
    loading: false,
    error: null
}

const homeStart = (state, action) => {
   return immutableObject(state, {loading: true})
}


const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_HOME_START:
            return homeStart(state, action)
        default:
            return state
            
    }
}

export default reducer;