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
    margin: 0;
    &:last-child {
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
`;

export const ProductList = styled.div`
  grid-column: 1 / span 2;
  display: grid;
  grid-template-rows: 64px;
  row-gap: 24px;
  max-height: 320px;
  overflow: auto;
  margin: 8px 0;
`;

export const Product = styled.div`
  display: grid;
  grid-column: 1 / span 2;
  grid-template-columns: 64px auto 96px;
  grid-template-rows: repeat(2, 32px);
  row-gap: 0px;
  column-gap: 16px;
  grid-auto-flow: column;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: ${radiusCards};
    height: 64px;
    width: 64px;

    grid-row: 1 / span 2;
  }

  div:first-child {
    grid-column: 2;
  }
`;

export const Total = styled.span`
  text-transform: uppercase;
`;

export const TotalPrice = styled.span`
  ${h6Style};
  justify-self: flex-end;
`;
