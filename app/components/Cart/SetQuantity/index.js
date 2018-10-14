import React from "react";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native";
import { changeQuantityInCart } from "../actions";
import { quantitySelector } from "../CartSelectors";
import {
  SetQuantityStyled,
  StyledAmount,
  StyledPlusMinus
} from "./SetQuantity.style";

const SetQuantity = ({ id, quantity, changeQuantityInCart }) => (
  <SetQuantityStyled>
    <TouchableOpacity onPress={() => changeQuantityInCart(id, quantity + 1)}>
      <StyledPlusMinus>+</StyledPlusMinus>
    </TouchableOpacity>
    <StyledAmount> {quantity} </StyledAmount>
    <TouchableOpacity
      onPress={() => changeQuantityInCart(id, quantity - 1)}
      disabled={quantity === 1}
    >
      <StyledPlusMinus>-</StyledPlusMinus>
    </TouchableOpacity>
  </SetQuantityStyled>
);

const mapStateToProps = (state, ownProps) => ({
  quantity: quantitySelector(state)(ownProps.id)
});

export default connect(
  mapStateToProps,
  { changeQuantityInCart }
)(SetQuantity);
