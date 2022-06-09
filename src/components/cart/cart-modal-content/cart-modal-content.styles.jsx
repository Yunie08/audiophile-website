import styled from "styled-components";

import { h6Style } from "../../../utils/style/typography";
import { radiusCards } from "../../../utils/style/variables";
import colors from "../../../utils/style/colors";

export const CartContentContainer = styled.div`
  display: grid;
  grid-template-rows: 25px auto 25px 48px;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 24px;
  height: 100%;

  button {
    &:last-child {
      margin: 0;
      grid-column: 1 / span 2;
    }
  }
`;

export const CartCount = styled.div`
  ${h6Style};
  line-height: 0;
  align-self: center;
`;

export const ClearButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  text-align: right;
  text-decoration-line: underline;
  align-self: center;
  justify-self: flex-end;

  &:focus {
    outline: auto;
    outline-color: ${colors.dark};
  }
  &:hover {
    color: ${colors.primary};
  }
`;

export const Total = styled.span`
  text-transform: uppercase;
`;

export const TotalPrice = styled.span`
  ${h6Style};
  justify-self: flex-end;
  position: relative;
  letter-spacing: auto;

  &::before {
    position: absolute;
    content: "$";
    left: -20px;
  }
`;
