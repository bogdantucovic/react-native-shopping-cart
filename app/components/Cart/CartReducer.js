import {
  REMOVE_ALL__FROM_CART,
  CHANGE_QUANTITY_IN_CART
} from "./CartConstants";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./AddToCart/constants";

const initialState = {
  products: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId, price } = action;
      return {
        ...state,
        products: [...state.products, { productId, price, quantity: 1 }]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter(el => el.productId !== action.productId)
      };
    case CHANGE_QUANTITY_IN_CART:
      return {
        ...state,
        products: state.products.map(el => {
          if (el.productId === action.productId) {
            el.quantity = action.quantity;
          }
          return el;
        })
      };
    case REMOVE_ALL__FROM_CART:
      return initialState;
    default:
      return state;
  }
};
