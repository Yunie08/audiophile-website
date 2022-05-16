import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

import colors from "../../../utils/style/colors";
import { device } from "../../../utils/style/breakpoints";

const openingAnimation = css`
  @keyframes opening {
    0% {
      height: 0px;
    }
    100% {
      height: 96px;
    }
  }
`;
const openingAnimationMobile = css`
  @keyframes openingMobile {
    0% {
      height: 0px;
    }
    100% {
      height: 148px;
    }
  }
`;
const linkAnimation = css`
  @keyframes appearingLink {
    0%,
    40% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  column-gap: 3.4rem;

  @media ${device.tablet} {
    flex-basis: 100%;
    justify-content: ${(props) => props.parent === "header" && "center"};
    row-gap: 16px;

    ${openingAnimation}

    animation: ${(props) =>
      props.parent === "header" && "opening 300ms ease-in-out"};

    a {
      ${linkAnimation}
      animation: ${(props) =>
        props.parent === "header" && "appearingLink 300ms ease-in-out"};
    }
  }

  @media ${device.mobileL} {
    flex-direction: column;
    align-items: center;
    row-gap: 16px !important;

    ${openingAnimationMobile}
    animation: ${(props) =>
      props.parent === "header" && "openingMobile 300ms ease-in-out"};

    a {
      height: 25px;
    }

    &:last-child {
      margin-bottom: 28px;
    }
  }
`;

export const NavLink = styled(Link)`
  color: ${colors.light};
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  height: 9.6rem;
  display: flex;
  align-items: center;

  &:hover {
    color: ${colors.primary};
  }
`;
