import styled from "styled-components";

import { device } from "../../../utils/style/breakpoints";
import colors from "../../../utils/style/colors";
import { h2Style } from "../../../utils/style/typography";

const categoryHeight = {
  desktop: "239px",
  tablet: "246px",
  mobile: "102px",
};
export const CategoryTitle = styled.div`
  width: 100%;
  height: ${categoryHeight.desktop};
  background-color: ${colors.dark};
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.mobileL} {
    height: ${categoryHeight.mobile};
  }
  @media ${device.mobileL} {
    height: ${categoryHeight.mobile};
  }

  h1 {
    ${h2Style}
    letter-spacing: 0.143rem;
    color: ${colors.light};
    @media ${device.mobileL} {
      letter-spacing: 0.2rem;
    }
  }
`;
