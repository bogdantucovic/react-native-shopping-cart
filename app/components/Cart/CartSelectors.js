import { createSelector } from "reselect";

const cartProductsSelector = state => state.cart.products;

export const totalPriceSelector = createSelector(cartProductsSelector, items =>
  items.reduce((acc, item) => acc + item.quantity * item.price, 0)
);

export const totalProductsSelector = createSelector(
  cartProductsSelector,
  items =>
    items.length === 0 ? 0 : items.reduce((acc, item) => acc + item.quantity, 0)
);

export const quantitySelector = createSelector(
  cartProductsSelector,
  products => id => products.filter(v => v.productId === id)[0].quantity
);
