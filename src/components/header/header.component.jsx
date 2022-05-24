import { useState, useRef, useEffect } from "react";
import useMediaQuery from "../../utils/hooks/media-query.hooks";

import { StyledHeader, NavContainer } from "./header.styles";

import NavLinks from "../../components/shared/nav-links/nav-links.component";
import BurgerToggle from "../../components/shared/burger-toggle/burger-toggle.component";

import { ReactComponent as AudiophileLogo } from "../../static/images/shared/desktop/logo.svg";
import { ReactComponent as CartIcon } from "../../static/images/shared/desktop/icon-cart.svg";

import { NavLink } from "../../components/shared/nav-links/nav-links.styles";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const desktopDisplay = useMediaQuery("(min-width: 991px)");
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen]);

  return (
    <StyledHeader ref={ref}>
      <NavContainer parent="header" as="nav">
        <BurgerToggle isOpen={isOpen} setIsOpen={setIsOpen} />

        <NavLink to="/">
          <AudiophileLogo alt="Audiophile" />
        </NavLink>

        {(isOpen || desktopDisplay) && <NavLinks parent="header" />}

        <NavLink to="/cart">
          <CartIcon />
        </NavLink>
      </NavContainer>
    </StyledHeader>
  );
};

export default Header;
