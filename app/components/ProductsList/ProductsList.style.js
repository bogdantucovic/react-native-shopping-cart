import styled from "styled-components";

export const SwitchWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  padding-left: 10;
  margin-top: 10;
  margin-bottom: 10;
`;

export const ItemSeparator = styled.View`
  border-color: ${props => props.theme.brandPrimaryReverse};
  border-width: 1;
`;
