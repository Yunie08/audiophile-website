import styled from "styled-components";

import colors from "../../utils/style/colors";
import { LayoutContainer } from "../../utils/style/layout";

export const FooterContainer = styled.footer`
  height: 365px;
  background: ${colors.dark};
  display: flex;
  justify-content: center;
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
`;

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  p {
    max-width: 540px;
    margin: 0;
    color: ${colors.light};
    opacity: 0.5;
  }
`;

export const Socials = styled.ul`
  align-self: flex-end;
  justify-self: flex-end;
  list-style: none;
  display: flex;
  align-items: center;
  column-gap: 16px;

  svg {
    color: ${colors.light};
    &:hover {
      color: ${colors.primary};
    }
  }
`;

export const Copyright = styled.span`
  margin-top: auto;
  color: ${colors.light};
  opacity: 0.5;
`;
