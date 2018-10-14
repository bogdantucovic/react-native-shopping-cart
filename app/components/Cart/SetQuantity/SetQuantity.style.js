import styled from "styled-components";

export const SetQuantityStyled = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-left: 20;
  padding-right: 20;
  padding-top: 10;
  padding-bottom: 10;
`;

export const StyledAmount = styled.Text`
  font-size: 20;
  width: 100%;
  text-align: center;
`;

export const StyledPlusMinus = styled.Text`
  font-size: 30;
  color: ${props => props.theme.brandPrimaryReverse};
  background-color: ${props => props.theme.brandPrimary};
  width: 40;
  height: 40;
  text-align: center;
`;
