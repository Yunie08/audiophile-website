import styled from "styled-components";

import colors from "../../../utils/style/colors";
import { cardBaseStyle } from "../../../utils/style/layout";
import { device } from "../../../utils/style/breakpoints";

export const FocusContainer = styled.div`
  height: 320px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;

  @media ${device.tablet} {
    column-gap: 11px;
  }
  @media ${device.mobileL} {
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 200px);
    row-gap: inherit;
  }
`;

export const ImageContainer = styled.div`
  ${cardBaseStyle};
  background-image: ${(props) => `url(${props.imageUrl.desktop})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;

  @media ${device.tablet} {
    background-image: ${(props) => `url(${props.imageUrl.tablet})`};
  }
  @media ${device.mobileL} {
    background-image: ${(props) => `url(${props.imageUrl.mobile})`};
  }
`;

export const CtaContainer = styled.div`
  ${cardBaseStyle};
  background: ${colors.tertiary};

  @media ${device.tablet} {
    padding: 41px;
  }
  @media ${device.mobileL} {
    padding: 24px;
  }
`;
