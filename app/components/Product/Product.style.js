import styled from "styled-components";

export const ProductStyled = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10;
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 10;
`;

export const ProductLink = styled.TouchableOpacity`
  padding-top: 10;
  padding-bottom: 10;
`;

export const PriceStyled = styled.Text`
  font-size: 14;
  padding-bottom: 10;
  padding-top: 10;
`;

export const TitleStyled = styled.Text`
  color: ${props => props.theme.brandSuccess};
  font-size: 16;
  text-align: center;
`;
