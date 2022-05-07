import { ReactComponent as AudiophileLogo } from "../../assets/images/shared/desktop/logo.svg";
import { ReactComponent as CartIcon } from "../../assets/images/shared/desktop/icon-cart.svg";

import {
  Header,
  NavContainer,
  NavLinkContainer,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  return (
    <Header>
      <NavContainer>
        <NavLink to="/">
          <AudiophileLogo alt="Audiophile" />
        </NavLink>
        <NavLinkContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop/headphones">Headphones</NavLink>
          <NavLink to="/shop/speakers">Speakers</NavLink>
          <NavLink to="/shop/earphones">Earphones</NavLink>
        </NavLinkContainer>
        <NavLink to="/cart">
          <CartIcon />
        </NavLink>
      </NavContainer>
    </Header>
  );
};

export default Navigation;
