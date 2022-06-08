import styled from "styled-components";

import colors from "../../../utils/style/colors";
import { h6Style } from "../../../utils/style/typography";
import { radiusCards } from "../../../utils/style/variables";
import { device } from "../../../utils/style/breakpoints";
import { prefersReducedMotion } from "../../../utils/style/accessibility";

export const marginAdjust = {
  desktop: {
    home: "0 0 -32px 0",
    other: "80px 0 0 0",
  },
  tablet: {
    home: "54px 0 0 0",
    other: "54px 0 0 0",
  },
  mobile: {
    home: "-28px auto 0 auto",
    other: "54px auto 0 auto",
  },
};

export const CategoryContainer = styled.div`
  height: 204px;
  display: grid;
  grid-template-rows: 57% 20% 23%;
  justify-content: center;
  background-color: ${colors.tertiary};
  border-radius: ${radiusCards};

  margin: ${(props) =>
    props.parent === "home"
      ? marginAdjust.desktop.home
      : marginAdjust.desktop.other};

  @media ${device.tablet} {
    height: 165px;
    margin: ${marginAdjust.tablet.home};
    /* margin: ${(props) =>
      props.parent === "home"
        ? marginAdjust.tablet.home
        : marginAdjust.tablet.other}; */
  }

  @media ${device.mobileL} {
    max-width: 420px;
    width: 100%;
    margin: ${marginAdjust.mobile.home};
    /* margin: ${(props) =>
      props.parent === "home"
        ? marginAdjust.mobile.home
        : marginAdjust.mobile.other}; */
  }

  h2 {
    ${h6Style};
    justify-self: center;
    margin: 0;
  }

  button {
    align-self: top;
    justify-self: center;
    margin: 0 0 0 0;
    height: 20px;
  }

  &:hover > div {
    transform: scale(1.2);
    transition: all 200ms ease-in-out;
    ${prefersReducedMotion}
  }
  & > div {
    transition: all 300ms ease-in-out;
  }
`;

export const ImageContainer = styled.div`
  height: 188.5px;
  align-self: flex-end;
  img {
    height: 100%;
  }

  @media ${device.tablet} {
    height: 150px;
  }
`;
