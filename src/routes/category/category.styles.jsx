import styled from "styled-components";

import { device } from "../../utils/style/breakpoints";
import { headerHeight } from "../../utils/style/variables";

const mainCategoryRowGap = {
  desktop: "160px",
  tablet: "120px",
  mobile: "88px",
};

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: ${mainCategoryRowGap.desktop};
  margin-bottom: ${mainCategoryRowGap.desktop};
  padding-top: ${headerHeight.desktop};

  @media ${device.tablet} {
    row-gap: ${mainCategoryRowGap.tablet};
    margin-bottom: ${mainCategoryRowGap.tablet};
    padding-top: ${headerHeight.tablet};
  }
`;
