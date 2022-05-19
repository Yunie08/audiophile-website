import styled from "styled-components";

import { device } from "../../utils/style/breakpoints";
import { headerHeight } from "../../utils/style/variables";

export const Main = styled.main`
  padding-top: ${headerHeight.desktop};

  @media ${device.tablet} {
    padding-top: ${headerHeight.tablet};
  }
`;
