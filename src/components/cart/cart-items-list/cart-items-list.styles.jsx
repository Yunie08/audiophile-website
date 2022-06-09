import styled from "styled-components";

import { radiusCards } from "../../../utils/style/variables";
import colors from "../../../utils/style/colors";

export const ProductList = styled.div`
  grid-column: 1 / span 2;
  display: grid;
  grid-template-rows: 64px;
  row-gap: 24px;
  max-height: ${(props) => props.type === "checkout" && "320px"};
  overflow: auto;
  margin: ${(props) => props.type === "cart" && "8px 0px"};
`;

export const Product = styled.div`
  display: grid;
  grid-column: 1 / span 2;
  grid-template-columns: ${(props) =>
    props.type === "cart" && "64px auto 96px"};
  grid-template-columns: ${(props) =>
    props.type === "checkout" && "64px auto min-content"};
  grid-template-rows: repeat(2, 32px);
  row-gap: 0px;
  column-gap: 16px;
  grid-auto-flow: column;
  font-weight: 700;
  //align-items: center;

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
  div:last-child {
    grid-row: ${(props) => props.type === "cart" && "1 / span 2"};
    grid-row: ${(props) => props.type === "checkout" && "1"};
    align-self: center;
    justify-self: flex-end;
    font-weight: 700;
  }
`;

export const ProductName = styled.div`
  color: ${colors.dark};
`;
