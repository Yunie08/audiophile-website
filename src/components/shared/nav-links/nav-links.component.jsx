import { NavLinkContainer, NavLink } from "./nav-links.styles";

const NavLinks = ({ parent }) => {
  return (
    <NavLinkContainer parent={parent}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop/headphones">Headphones</NavLink>
      <NavLink to="/shop/speakers">Speakers</NavLink>
      <NavLink to="/shop/earphones">Earphones</NavLink>
    </NavLinkContainer>
  );
};

export default NavLinks;
