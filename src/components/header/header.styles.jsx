import styled from "styled-components";

import colors from "../../utils/style/colors";
import { device } from "../../utils/style/breakpoints";
import { headerHeight } from "../../utils/style/variables";

import { LayoutContainer } from "../../utils/style/layout";

export const StyledHeader = styled.header`
  width: 100%;
  /* background-color: rgba(0, 0, 0, 0.7); */
  background-color: ${colors.dark};
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 1;
  /* height: ${headerHeight.desktop};

  @media ${device.tablet} {
    height: ${headerHeight.tablet};
  } */
`;

export const NavContainer = styled(LayoutContainer)`
  display: grid;
  grid-template-columns: min-content auto min-content;
  grid-template-rows: ${headerHeight.desktop} max-content;
  column-gap: 42px;
  align-items: center;
  border-bottom: ${(props) => props.parent === "header" && "1px solid #333333"};

  @media ${device.tablet} {
    grid-template-columns: 20px auto 23px;
    grid-template-rows: ${headerHeight.tablet} max-content;
  }

  // Burger menu
  button:first-child {
    display: none;

    @media ${device.tablet} {
      display: inline-block;
    }
  }

  // Logo
  a:nth-child(2) {
    @media ${device.mobileL} {
      margin: 0 auto;
    }
  }

  // Main nav
  div:nth-child(3) {
    justify-self: center;

    @media ${device.tablet} {
      order: 4;
      grid-column: 1 / span 3;
      margin-bottom: 10px;
    }

    @media ${device.mobileL} {
      order: 4;
      grid-column: 1 / span 3;
      margin-bottom: 30px;
    }
  }

  button:last-child {
    background: none;
    border: none;
    color: ${colors.light};
    cursor: pointer;

    &:hover {
      color: ${colors.primary};
    }

    &:active,
    &:focus,
    &:target {
      background: none;
      border: none;
      color: ${colors.light};
    }
  }

  @media ${device.tablet} {
    row-gap: ${(props) => props.parent !== "header" && "32px"};
    margin-bottom: ${(props) => props.parent !== "header" && "32px"};
  }
  @media ${device.mobileL} {
    justify-content: ${(props) => props.parent !== "header" && "center"};
    row-gap: ${(props) => props.parent !== "header" && "48px"};
    margin-bottom: ${(props) => props.parent !== "header" && "48px"};
  }

  a {
    @media ${device.tablet} {
      height: ${(props) => props.parent !== "header" && "25px"};

      &:nth-child(1) {
        height: ${(props) => props.parent !== "header" && "auto"};
      }
    }
  }
`;
