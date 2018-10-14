import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

export const addToCart = (productId, price) => {
  return {
    type: ADD_TO_CART,
    productId,
    price
  };
};

export const removeFromCart = productId => {
  return {
    type: REMOVE_FROM_CART,
    productId
  };
};
