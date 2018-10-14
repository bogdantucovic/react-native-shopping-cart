import { combineReducers } from "redux";
import cart from "../components/Cart/CartReducer";
import products from "../components/Products/ProductsReducer";

const rootReducer = combineReducers({
  cart,
  products
});

export default rootReducer;
