import styled from "styled-components";

import colors from "../../../utils/style/colors";
import { radiusCards } from "../../../utils/style/variables";
import { cardBaseStyle } from "../../../utils/style/layout";
import { device } from "../../../utils/style/breakpoints";

import echoImage from "../../../static/images/home/desktop/pattern-circles.svg";

export const FocusContainer = styled.div`
  ${cardBaseStyle}
  height: 560px;
  background: ${colors.primary};
  border-radius: ${radiusCards};
  justify-content: flex-end;

  background-image: ${(props) => `url(${props.imageUrl.desktop})`},
    url(${echoImage});
  background-repeat: no-repeat;
  background-size: 35%, 944px;
  background-position: bottom -13px left 130px, bottom -360px left -155px;

  @media ${device.tablet} {
    height: 720px;
    justify-content: center;
    align-items: flex-end;
    padding: 39px;
    background-image: ${(props) => `url(${props.imageUrl.tablet})`},
      url(${echoImage});
    background-size: 180px, 944px;
    background-position: top 64px center, bottom 64px center;
  }
  @media ${device.mobileL} {
    height: 600px;
    padding: 30px;
    background-image: ${(props) => `url(${props.imageUrl.mobile})`},
      url(${echoImage});
    background-size: 157px, 558px;
    background-position: top 64px center, top -119px center;
  }
`;

export const CtaContainer = styled.div`
  width: 35rem;

  @media ${device.mobileL} {
    width: 28rem;
  }
`;
