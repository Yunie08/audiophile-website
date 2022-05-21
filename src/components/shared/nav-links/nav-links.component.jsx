import { NavLink } from "./nav-links.styles";

import {
  NavLinkContainerHeader,
  NavLinkContainerFooter,
} from "./nav-links.styles";

export const NAV_CONTAINER_TYPES = {
  header: "header",
  footer: "footer",
};

const getNavContainer = (parent = NAV_CONTAINER_TYPES.header) =>
  ({
    [NAV_CONTAINER_TYPES.header]: NavLinkContainerHeader,
    [NAV_CONTAINER_TYPES.footer]: NavLinkContainerFooter,
  }[parent]);

const NavLinks = ({ parent }) => {
  const CustomNavContainer = getNavContainer(parent);

  return (
    <CustomNavContainer parent={parent}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop/headphones">Headphones</NavLink>
      <NavLink to="/shop/speakers">Speakers</NavLink>
      <NavLink to="/shop/earphones">Earphones</NavLink>
    </CustomNavContainer>
  );
};

export default NavLinks;
