import { ReactComponent as AudiophileLogo } from "../../static/images/shared/desktop/logo.svg";
import { ReactComponent as CartIcon } from "../../static/images/shared/desktop/icon-cart.svg";

import { NavContainer, NavLinkContainer, NavLink } from "./navigation.styles";

const Navigation = ({ parent }) => {
  return (
    <NavContainer parent={parent}>
      <NavLink to="/">
        <AudiophileLogo alt="Audiophile" />
      </NavLink>
      <NavLinkContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop/headphones">Headphones</NavLink>
        <NavLink to="/shop/speakers">Speakers</NavLink>
        <NavLink to="/shop/earphones">Earphones</NavLink>
      </NavLinkContainer>
      {parent === "header" && (
        <NavLink to="/cart">
          <CartIcon />
        </NavLink>
      )}
    </NavContainer>
  );
};

export default Navigation;
