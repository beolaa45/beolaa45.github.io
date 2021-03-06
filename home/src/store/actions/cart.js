import * as actionTypes from "./actionTypes";
import axios from "../../api/baseApi";

export const cartStart = () => {
  return {
    type: actionTypes.FETCH_CART_ADD_START,
  };
};

export const cartSuccess = (data, quanlityDetail = 1) => {
  return {
    type: actionTypes.FETCH_CART_ADD_SUCCESS,
    data : {...data, quanlity: quanlityDetail},
  };
};

export const cartFail = (error) => {
  return {
    type: actionTypes.FETCH_CART_ADD_FAIL,
    error,
  };
};
export const cartInit = (id, quanlityDetail) => {
  return (dispatch) => {
    dispatch(cartStart());
    axios
      .get("/products/" + id)
      .then((data) => {
        dispatch(cartSuccess(data, quanlityDetail));
      })
      .catch((error) => cartFail(error));
  };
};

export const cartOnChangeQuanlity = (quanlity, id) => {
  return {
    type: actionTypes.FETCH_CART_ON_CHANGE_QUANLITY,
    quanlity,
    id,
  };
};

export const cartPlusQuanlity = (id) => {
  return {
    type: actionTypes.FETCH_CART_PLUS_QUANLITY,
    id,
  };
};

export const cartMiunsQuanlity = (id) => {
  return {
    type: actionTypes.FETCH_CART_MIUNS_QUANLITY,
    id,
  };
};

export const cartDelete = (id) => {
  return {
    type: actionTypes.FETCH_CART_DELETE,
    id,
  };
};
