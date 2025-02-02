import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_DELETE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SAHIPPING_ADDRESS,
} from "../constants/cartConstants.js";
import request  from "../api.js";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await request.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_DELETE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SAHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem("ShippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });

  localStorage.setItem("paymnetMethod", JSON.stringify(data));
};
