import {
  SET_PRODUCTS,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
  FETCH_PRODUCTS,
} from "../constants/action-types";
import api from "../../api/api";

//Action creater
export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = (products) => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
  };
};

export const fetchProducts = () => {
  async (dispatch) =>{
    const response = await api.get("/products");
    dispatch({ type: FETCH_PRODUCTS, payload: response.data });
  };
};
