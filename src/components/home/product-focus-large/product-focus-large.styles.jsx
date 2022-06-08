import styled from "styled-components";

import colors from "../../../utils/style/colors";
import { radiusCards } from "../../../utils/style/variables";
import { cardBaseStyle } from "../../../utils/style/layout";
import { device } from "../../../utils/style/breakpoints";
import { prefersReducedMotion } from "../../../utils/style/accessibility";

import echoImage from "../../../static/images/home/desktop/pattern-circles.svg";

export const FocusContainer = styled.div`
  ${cardBaseStyle}
  height: 560px;
  background: ${colors.primary};
  border-radius: ${radiusCards};
  justify-content: flex-end;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    background-image: url(${echoImage});
    background-repeat: no-repeat;
    background-size: 944px;
    background-position: bottom -360px left -155px;

    // Sound wave animation
    @keyframes soundBeat {
      0%,
      10% {
        transform: scale(1.1);
      }
      10%,
      20% {
        transform: scale(1);
      }
      20%,
      30% {
        transform: scale(1.11);
      }
      40%,
      50% {
        transform: scale(1);
      }
      50%,
      50% {
        transform: scale(1.09);
      }
      65%,
      75% {
        transform: scale(1);
      }
      75%,
      90% {
        transform: scale(1.15);
      }
      90%,
      100% {
        transform: scale(1);
      }
    }
  }

  &:hover::before {
    animation: soundBeat 2500ms infinite;
    ${prefersReducedMotion}
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-image: ${(props) => `url(${props.imageUrl.desktop})`};
    background-repeat: no-repeat;
    background-size: 35%;
    background-position: bottom -13px left 130px;
  }

  @media ${device.tablet} {
    height: 720px;
    justify-content: center;
    align-items: flex-end;
    padding: 39px;

    &::before {
      background-position: bottom 64px center;
    }
    &::after {
      background-image: ${(props) => `url(${props.imageUrl.tablet})`};
      background-size: 180px;
      background-position: top 64px center;
    }
  }

  @media ${device.mobileL} {
    height: 600px;
    padding: 30px;

    &::before {
      background-size: 558px;
      background-position: top -119px center;
    }
    &::after {
      background-image: ${(props) => `url(${props.imageUrl.mobile})`};
      background-size: 157px;
    }
  }
`;

export const CtaContainer = styled.div`
  width: 35rem;

  @media ${device.mobileL} {
    width: 28rem;
  }
`;
