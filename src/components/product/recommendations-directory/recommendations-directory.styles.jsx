import styled from "styled-components";

import { device } from "../../../utils/style/breakpoints";
import { h3Style } from "../../../utils/style/typography";

import { marginAdjust } from "../../shared/directory-item/directory-item.styles";

const columnGap = {
  desktop: "30px",
  tablet: "11px",
};

const rowGapMain = {
  desktop: "64px",
  tablet: "56px",
  mobile: "40px",
};

export const MainDirectoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: ${rowGapMain.desktop};

  @media ${device.mobileL} {
    margin-bottom: 80px;
  }
`;

export const Title = styled.h2`
  ${h3Style};
  margin: 0;
`;

export const RecommendationsDirectoryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${columnGap.desktop};

  @media ${device.tablet} {
    column-gap: ${columnGap.tablet};
  }
  @media ${device.mobileL} {
    grid-template-columns: 1fr;
    row-gap: 56px;
  }
`;
