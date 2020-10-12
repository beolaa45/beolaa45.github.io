import * as actionTypes from "../actions/actionTypes";
import { immutableObject } from "../actions/uilities";
const initalState = {
  data: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")).data
    : [],
  loading: false,
};

const cartStart = (state) => {
  return immutableObject(state, { loading: true });
};

const cartSuccess = (state, action) => {
  let newState;
  let fag = true;
  let newData = [...state.data];
  for (let i = 0; i < newData.length; i++) {
    if (newData[i].id !== action.data.id) {
      fag = false;

      newState = immutableObject(state, {
        loading: false,
        data: state.data.concat([action.data]),
      });

      localStorage.setItem("cart", JSON.stringify(newState));
    } else {
      newData[i] = {
        ...newData[i],
        quanlity: newData[i].quanlity + action.data.quanlity,
      };

      localStorage.setItem(
        "cart",
        JSON.stringify({ data: newData, loading: false })
      );
      return { data: newData, loading: false };
    }
  }

  if (fag && !localStorage.getItem("cart")) {
    fag = false;
    newState = immutableObject(state, {
      loading: false,
      data: state.data.concat([action.data]),
    });
    localStorage.setItem("cart", JSON.stringify(newState));
  }
  return newState;
};

const cartFail = () => {};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CART_ADD_START:
      return cartStart(state, action);
    case actionTypes.FETCH_CART_ADD_SUCCESS:
      return cartSuccess(state, action);
    case actionTypes.FETCH_CART_ADD_FAIL:
      return cartFail(state, action);

    default:
      return state;
  }
};

export default reducer;
