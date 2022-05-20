import styled from "styled-components";

import { device } from "../../../utils/style/breakpoints";

// Variables
const productsRowGap = {
  desktop: "160px",
  tablet: "120px",
};

// Styling components
export const CategoryProductsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: ${productsRowGap.desktop};

  // Desktop : every second product is inverted
  article:nth-child(2n) {
    //grid-auto-flow: dense;
    direction: rtl;
    text-align: left;

    > div {
      padding: 0 95px 0 0;

      button {
        margin-right: auto;
      }
    }
  }

  @media ${device.tablet} {
    row-gap: ${productsRowGap.tablet};
  }
`;
