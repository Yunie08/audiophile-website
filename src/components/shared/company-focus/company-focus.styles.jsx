import styled from "styled-components";

import colors from "../../../utils/style/colors";
import { radiusCards } from "../../../utils/style/variables";
import { h2Style } from "../../../utils/style/typography";
import { device } from "../../../utils/style/breakpoints";

import bgrdImgDesktop from "../../../static/images/shared/desktop/image-best-gear.jpg";
import bgrdImgTablet from "../../../static/images/shared/tablet/image-best-gear.jpg";
import bgrdImgMobile from "../../../static/images/shared/mobile/image-best-gear.jpg";

export const CompanyFocusContainer = styled.div`
  height: 588px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px; // TODO: refactor
  margin: 200px 0;

  @media ${device.tablet} {
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: 300px max-content;
    row-gap: 40px;
    margin: 96px 0 81px 0;

    div:nth-child(2) {
      order: 1;
    }
    div:nth-child(1) {
      order: 2;
    }
  }

  @media ${device.mobileM} {
    row-gap: 16.76px;
    margin: 120px 0 105px 0;
  }
`;

export const TextContainer = styled.div`
  max-width: 445px;
  align-self: center;

  @media ${device.tablet} {
    max-width: 100%;
    padding: 0 58px;
    text-align: center;
  }

  @media ${device.mobileL} {
    padding: 0;
  }

  h2 {
    ${h2Style}
    @media ${device.tablet} {
      margin-bottom: 32px;
    }
  }

  span {
    color: ${colors.primary};
  }

  p {
    opacity: 0.8;
  }
`;

export const ImageContainer = styled.div`
  border-radius: ${radiusCards};
  background-size: cover;
  background-position: center;
  background-image: url(${bgrdImgDesktop});

  @media ${device.tablet} {
    background-image: url(${bgrdImgTablet});
  }

  @media ${device.mobileM} {
    background-image: url(${bgrdImgMobile});
  }
`;
