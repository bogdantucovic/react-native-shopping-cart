import React from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "./actions";
import PropTypes from "prop-types";
import { AddToCartBtn, AddToCartText } from "./index.style";

const AddToCart = ({ products, product, removeFromCart, addToCart }) => {
  const isInCart = products.find((prod, ind) => {
    return prod.productId === product.id;
  });

  const addRemove = () => {
    if (isInCart) {
      removeFromCart(product.id);
    } else {
      const { id, price } = product;
      addToCart(id, price);
    }
  };

  return (
    <AddToCartBtn isInCart={isInCart} type="button" onPress={addRemove}>
      <AddToCartText>
        {isInCart ? "Remove from cart" : "Add to cart"}
      </AddToCartText>
    </AddToCartBtn>
  );
};

AddToCart.propTypes = {
  products: PropTypes.array.isRequired,
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: state.cart.products
});

export default connect(
  mapStateToProps,
  { addToCart, removeFromCart }
)(AddToCart);
