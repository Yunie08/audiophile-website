import styled from "styled-components";

import { device } from "../../utils/style/breakpoints";
import { headerHeight } from "../../utils/style/variables";

const mainColGap = {
  desktop: "30px",
  tablet: "120px",
  mobile: "88px",
};

const marginBottom = {
  desktop: "141px",
  tablet: "116px",
  mobile: "97px",
};

export const CheckoutMain = styled.main`
  display: flex;
  padding-top: ${headerHeight.desktop};
  margin-bottom: ${marginBottom.desktop};
  @media ${device.tablet} {
    padding-top: ${headerHeight.tablet};
    margin-bottom: ${marginBottom.tablet};
  }
  @media ${device.mobileL} {
    margin-bottom: ${marginBottom.mobileL};
  }
`;
