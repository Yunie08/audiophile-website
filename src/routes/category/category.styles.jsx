import styled from "styled-components";

import { device } from "../../utils/style/breakpoints";
import { headerHeight } from "../../utils/style/variables";

// TODO: modifier les mrges des composants principaux de la page d'accueil
const mainRowGap = {
  desktop: "160px",
  tablet: "120px",
  mobile: "88px",
};

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: ${mainRowGap.desktop};
  padding-top: ${headerHeight.desktop};

  @media ${device.tablet} {
    row-gap: ${mainRowGap.tablet};
    padding-top: ${headerHeight.tablet};
  }
`;
