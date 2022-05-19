import styled from "styled-components";

import colors from "../../../utils/style/colors";
import { radiusCards } from "../../../utils/style/variables";
import { cardBaseStyle } from "../../../utils/style/layout";
import { device } from "../../../utils/style/breakpoints";

export const FocusContainer = styled.div`
  ${cardBaseStyle}
  height: 320px;
  background: ${colors.primary};
  border-radius: ${radiusCards};

  background-image: ${(props) => `url(${props.imageUrl.desktop})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media ${device.tablet} {
    background-image: ${(props) => `url(${props.imageUrl.tablet})`};
    padding: 0 62px;
  }
  @media ${device.mobileL} {
    padding: 0 24px;
    background-image: ${(props) => `url(${props.imageUrl.mobile})`};
  }
`;

export const CtaContainer = styled.div`
  width: 35rem;
`;
