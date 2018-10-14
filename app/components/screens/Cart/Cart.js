import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native";
import { removeAllFromCart } from "../../Cart/actions";
import Product from "../../Product/Product";
import SetQuantity from "../../Cart/SetQuantity/";
import ProductsList from "../../ProductsList/ProductsList";
import { productsDataSelector } from "../../Products/ProductsSelectors";
import {
  totalPriceSelector,
  totalProductsSelector
} from "../../Cart/CartSelectors";
import {
  StyledCart,
  StyledCartHeader,
  StyledCartProducts,
  EmptyText,
  Discard,
  Total
} from "./Cart.style";

const Cart = ({
  products,
  productsData,
  totalProducts,
  totalPrice,
  removeAllFromCart
}) => {
  const getCartProducts = allProducts => {
    const productsIds = products.map(el => el.productId);
    return allProducts.filter(el => productsIds.includes(el.id));
  };

  return (
    <StyledCart>
      <StyledCartHeader>
        <Total>Total: {totalPrice} RSD</Total>
        {totalProducts > 0 ? (
          <TouchableOpacity onPress={removeAllFromCart}>
            <Discard>Discard all products</Discard>
          </TouchableOpacity>
        ) : (
          <EmptyText>Your cart is currently empty</EmptyText>
        )}
      </StyledCartHeader>
      {totalProducts > 0 && (
        <StyledCartProducts>
          <ProductsList list={getCartProducts(productsData)}>
            {product => (
              <Product
                product={product}
                quantity={id => <SetQuantity id={id} />}
              />
            )}
          </ProductsList>
        </StyledCartProducts>
      )}
    </StyledCart>
  );
};

Cart.propTypes = {
  products: PropTypes.array.isRequired,
  totalProducts: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  removeAllFromCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: state.cart.products,
  productsData: productsDataSelector(state),
  totalPrice: totalPriceSelector(state),
  totalProducts: totalProductsSelector(state)
});

export default connect(
  mapStateToProps,
  { removeAllFromCart }
)(Cart);
