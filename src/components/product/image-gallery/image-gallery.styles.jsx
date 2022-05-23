import styled from "styled-components";

import { device } from "../../../utils/style/breakpoints";
import { radiusCards } from "../../../utils/style/variables";

const rowGaps = {
  desktop: "32px",
  tablet: "20px",
};

const columnGaps = {
  desktop: "30px",
  tablet: "18px",
};

export const GalleryLayout = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: ${`calc(40% - ${columnGaps.desktop} / 2), calc(60% - ${columnGaps.desktop} / 2)`};
  grid-template-rows: ${`repeat(2, calc(50% - ${rowGaps.desktop} / 2))`};
  column-gap: ${columnGaps.desktop};
  row-gap: ${rowGaps.desktop};
  overflow: hidden;
  height: auto;
  max-height: 592px;

  @media ${device.tablet} {
    column-gap: ${columnGaps.tablet};
    row-gap: ${rowGaps.tablet};
    grid-template-rows: ${`repeat(2, calc(50% - (${rowGaps.tablet}) / 2))`};
    min-height: 368px;
  }
  @media ${device.mobileM} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    max-height: 100%;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: ${radiusCards};
  }

  picture:nth-child(3) {
    grid-row: 1 / 3;
    grid-column: 2;
    @media ${device.mobileM} {
      grid-row: 3;
      grid-column: 1;
    }
  }
`;
