import styled from "styled-components";

export const StyledCart = styled.View`
  padding-top: 30;
  flex: 1;
  align-items: stretch;
`;

export const EmptyText = styled.Text`
  margin-top: 20;
`;

export const Total = styled.Text`
  font-size: 18;
`;

export const StyledCartHeader = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StyledCartProducts = styled.View`
  flex: 4;
  align-items: stretch;
`;

export const Discard = styled.Text`
  background-color: ${props => props.theme.brandPrimary};
  color: ${props => props.theme.brandPrimaryReverse};
  margin-top: 20;
  padding-top: 10;
  padding-bottom: 10;
  padding-right: 10;
  padding-left: 10;
`;
