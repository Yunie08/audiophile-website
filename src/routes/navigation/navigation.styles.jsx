import styled from "styled-components";
import colors from "../../utils/style/colors";

import { Link } from "react-router-dom";

export const Header = styled.header`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  position: fixed;
`;

export const NavContainer = styled.nav`
  max-width: 1100px;
  width: 90%;
  height: 9.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #979797;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  column-gap: 3.4rem;
`;

export const NavLink = styled(Link)`
  color: ${colors.light};
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;

  &:hover {
    color: ${colors.primary};
  }
`;
