import styled from "styled-components";

import { device } from "../../utils/style/breakpoints";

const mainHomeRowGap = {
  desktop: "200px",
  tablet: "148px",
  mobile: "120px",
};

export const MainHome = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: ${mainHomeRowGap.desktop};
  margin-bottom: ${mainHomeRowGap.desktop};

  @media ${device.tablet} {
    row-gap: ${mainHomeRowGap.tablet};
    margin-bottom: ${mainHomeRowGap.tablet};
  }
  @media ${device.mobileL} {
    row-gap: ${mainHomeRowGap.mobile};
    margin-bottom: ${mainHomeRowGap.mobile};
  }
`;
