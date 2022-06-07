import styled from "styled-components";

import { device } from "../../utils/style/breakpoints";
import { headerHeight } from "../../utils/style/variables";
import colors from "../../utils/style/colors";

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
  padding-bottom: ${marginBottom.desktop};
  background-color: ${colors.tertiary};

  @media ${device.tablet} {
    padding-top: ${headerHeight.tablet};
    padding-bottom: ${marginBottom.tablet};
  }
  @media ${device.mobileL} {
    padding-bottom: ${marginBottom.mobileL};
  }
`;
