import styled from "styled-components";

import colors from "../../utils/style/colors";
import { LayoutContainer } from "../../utils/style/layout";
import { device } from "../../utils/style/breakpoints";

export const FooterContainer = styled.footer`
  height: 365px;
  background: ${colors.dark};
  display: flex;
  justify-content: center;

  @media ${device.tablet} {
    height: auto;
  }
`;

export const FooterLayoutContainer = styled(LayoutContainer)`
  position: relative;
  padding: 40px 0 48px 0;
  display: flex;
  flex-direction: column;
  &:after {
    content: "";
    position: absolute;
    width: 101px;
    height: 4px;
    background-color: ${colors.primary};
    top: 0;
    left: 0;
  }

  @media ${device.tablet} {
    padding: 60px 0 46px 0;
  }
  @media ${device.mobileL} {
    padding: 52px 0 38px 0;
  }
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 56px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 80px;
  }
  @media ${device.mobileL} {
    text-align: center;
    row-gap: 48px;
  }
`;

export const Presentation = styled.p`
  max-width: 540px;
  margin: 0;
  color: ${colors.light};
  opacity: 0.5;

  @media ${device.tablet} {
    grid-column: 1 / 3;
    max-width: 100%;
  }
`;

export const Socials = styled.ul`
  align-self: flex-end;
  justify-self: flex-end;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 16px;
  line-height: 1;
  margin: 0;

  a {
    display: block;
  }

  svg {
    color: ${colors.light};
    &:hover {
      color: ${colors.primary};
    }
  }

  @media ${device.tablet} {
    grid-column: 2 / 3;
  }

  @media ${device.mobileL} {
    margin: 0 auto;
    padding: 0;
    grid-column: 1 / 3;
  }
`;

export const Copyright = styled.span`
  margin-top: auto;
  color: ${colors.light};
  opacity: 0.5;

  @media ${device.tablet} {
    grid-column: 1 / 2;
    grid-row: 2;
  }
  @media ${device.mobileL} {
    grid-column: 1 / 3;
  }
`;
