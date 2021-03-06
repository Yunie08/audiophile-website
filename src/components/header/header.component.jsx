import { useState, useRef, useEffect, useContext } from "react";
import useMediaQuery from "../../utils/hooks/media-query.hooks";
import useClickOutside from "../../utils/hooks/use-click-location.hooks";

import { CartContext } from "../../utils/contexts/cart.context";

import NavLinks from "../../components/shared/nav-links/nav-links.component";
import BurgerToggle from "../../components/shared/burger-toggle/burger-toggle.component";
import CartModal from "../cart/cart-modal/cart-modal.component";
import { NavLink } from "../../components/shared/nav-links/nav-links.styles";

import { ReactComponent as AudiophileLogo } from "../../static/images/shared/desktop/logo.svg";
import { ReactComponent as CartIcon } from "../../static/images/shared/desktop/icon-cart.svg";

import { StyledHeader, NavContainer } from "./header.styles";

const Header = () => {
  const { toggleIsCartOpen, isCartOpen } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const desktopDisplay = useMediaQuery("(min-width: 991px)");
  const ref = useRef();
  const isClickedOutside = useClickOutside(isOpen, ref);

  // // Close drowpdown menu on click outside of header
  useEffect(() => {
    isClickedOutside && setIsOpen(false);
  }, [isClickedOutside, isOpen]);

  return (
    <StyledHeader ref={ref}>
      <NavContainer parent="header" as="nav">
        <BurgerToggle isOpen={isOpen} setIsOpen={setIsOpen} />

        <NavLink to="/">
          <AudiophileLogo alt="Audiophile" />
        </NavLink>

        {(isOpen || desktopDisplay) && <NavLinks parent="header" />}
        <NavLink onClick={toggleIsCartOpen} to={{}}>
          <CartIcon alt="cart" />
        </NavLink>
        {isCartOpen && <CartModal />}
      </NavContainer>
    </StyledHeader>
  );
};

export default Header;
