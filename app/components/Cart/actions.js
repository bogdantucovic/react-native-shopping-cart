import {
  REMOVE_ALL__FROM_CART,
  CHANGE_QUANTITY_IN_CART
} from "./CartConstants";

export const removeAllFromCart = () => ({
  type: REMOVE_ALL__FROM_CART
});

export const changeQuantityInCart = (productId, quantity) => ({
  type: CHANGE_QUANTITY_IN_CART,
  productId,
  quantity
});
