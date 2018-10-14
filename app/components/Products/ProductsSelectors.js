import { createSelector } from "reselect";

export const productsSelector = state => state.products;

export const productsDataSelector = createSelector(
  productsSelector,
  products => products.data
);
