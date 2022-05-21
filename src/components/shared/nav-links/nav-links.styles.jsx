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
      height: 168px;
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
    row-gap: 16px;
  }

  @media ${device.mobileL} {
    flex-direction: column;
    align-items: center;
    row-gap: 16px !important;
  }
`;

export const NavLinkContainerHeader = styled(NavLinkContainer)`
  @media ${device.tablet} {
    ${openingAnimation}
    justify-content: center;
    animation: opening 300ms ease-in-out;

    a {
      ${linkAnimation}
      animation:appearingLink 300ms ease-in-out;
    }
  }

  @media ${device.mobileL} {
    ${openingAnimationMobile}
    animation: openingMobile 300ms ease-in-out;

    a {
      height: 30px;
    }

    &:last-child {
      margin-bottom: 28px;
    }
  }
`;

export const NavLinkContainerFooter = styled(NavLinkContainer)`
  a {
    height: 25px;
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

  @media ${device.mobileL} {
    height: 3.5rem;
  }
`;
