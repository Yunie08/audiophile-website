import { useState } from "react";

import NavLinks from "../../components/shared/nav-links/nav-links.component";
import BurgerToggle from "../../components/shared/burger-toggle/burger-toggle.component";

import { ReactComponent as AudiophileLogo } from "../../static/images/shared/desktop/logo.svg";
import { ReactComponent as CartIcon } from "../../static/images/shared/desktop/icon-cart.svg";

import { NavContainer } from "./navigation.styles";
import { NavLink } from "../../components/shared/nav-links/nav-links.styles";

const Navigation = ({ parent, isSmallScreen, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer>
      <BurgerToggle isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavLink to="/">
        <AudiophileLogo alt="Audiophile" />
      </NavLink>
      <NavLinks />
      <NavLink to="/cart">
        <CartIcon />
      </NavLink>
    </NavContainer>
  );
};

export default Navigation;
