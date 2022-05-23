import styled, { css } from "styled-components";

import { device } from "../../../utils/style/breakpoints";
import { h3Style } from "../../../utils/style/typography";

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 57.2% 31.5%;
  column-gap: 125px;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    row-gap: 120px;
  }
  @media ${device.mobileL} {
    row-gap: 88px;
  }
`;

export const DetailsTitle = styled.h2`
  ${h3Style}
  display: inline-block;
  margin: 0;
  min-width: 190px;
`;

const BaseContainer = styled.div`
  display: grid;
  grid-template-rows: min-content auto;
  row-gap: 32px;

  @media ${device.mobileL} {
    row-gap: 24px;
  }
`;

export const FeaturesContainer = styled(BaseContainer)`
  p {
    white-space: pre-wrap;
    margin: 0px !important;
  }
`;

export const AccessoriesContainer = styled(BaseContainer)`
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 50%);
    row-gap: 0px;
  }
  @media ${device.mobileL} {
    grid-template-columns: 1fr;
    row-gap: 24px;
  }
`;
