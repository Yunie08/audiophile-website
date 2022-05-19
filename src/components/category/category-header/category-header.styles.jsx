import styled from "styled-components";

import { device } from "../../../utils/style/breakpoints";
import colors from "../../../utils/style/colors";
import { titleStyle } from "../../../utils/style/typography";

const categoryHeight = {
  desktop: "239px",
  mobile: "246px",
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

  h1 {
    ${titleStyle}
    font-size: 4rem;
    line-height: 4.4rem;
    letter-spacing: 0.143rem;
    color: ${colors.light};
  }
`;
