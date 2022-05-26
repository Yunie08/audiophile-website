import styled from "styled-components";
import { radiusCards } from "../../../utils/style/variables";
import colors from "../../../utils/style/colors";
const rowGap = {
  desktop: "24px",
  tablet: "",
};

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
    grid-row: 1 / 3;
    align-self: center;
  }
`;

export const ProductName = styled.div`
  font-weight: 700;
  color: ${colors.dark};
`;
