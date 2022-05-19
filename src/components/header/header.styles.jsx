import styled from "styled-components";

import colors from "../../utils/style/colors";
import { device } from "../../utils/style/breakpoints";
import { headerHeight } from "../../utils/style/variables";

export const StyledHeader = styled.header`
  width: 100%;
  /* background-color: rgba(0, 0, 0, 0.7); */
  background-color: ${colors.dark};
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 100;
  height: ${headerHeight.desktop};

  @media ${device.tablet} {
    height: ${headerHeight.tablet};
  }
`;
