import styled from "styled-components";

import { device } from "../../utils/style/breakpoints";
import { headerHeight } from "../../utils/style/variables";

export const mainRowGap = {
  desktop: "160px",
  tablet: "120px",
  mobile: "88px",
};

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: ${mainRowGap.desktop};
  margin-bottom: ${mainRowGap.desktop};
  padding-top: ${headerHeight.desktop};

  @media ${device.tablet} {
    row-gap: ${mainRowGap.tablet};
    margin-bottom: ${mainRowGap.tablet};
    padding-top: ${headerHeight.tablet};
  }
`;
