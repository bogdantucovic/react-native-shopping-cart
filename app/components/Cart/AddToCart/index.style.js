import styled from "styled-components";

export const AddToCartBtn = styled.TouchableOpacity`
  background-color: ${props =>
    props.isInCart ? props.theme.brandPrimary : props.theme.brandSuccess};
  width: 100%;
`;

export const AddToCartText = styled.Text`
  color: ${props => props.theme.brandPrimaryReverse};
  text-align: center;
  padding-top: 5;
  padding-bottom: 5;
  font-weight: 700;
`;
