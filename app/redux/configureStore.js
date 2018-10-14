import { createStore, compose } from "redux";
import rootReducer from "./rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = presistedState =>
  createStore(rootReducer, presistedState, composeEnhancers());

export default configureStore;
