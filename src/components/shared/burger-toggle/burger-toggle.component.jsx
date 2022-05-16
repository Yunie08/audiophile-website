import { ReactComponent as Hamburger } from "../../../static/images/shared/tablet/icon-hamburger.svg";

import { Button, Label } from "./burger-toggle.styled";

const BurgerToggle = ({ isOpen, setIsOpen }) => {
  const toggleNavOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Button aria-expanded={isOpen} onClick={toggleNavOpen}>
      <Hamburger focusable="false" />
      <Label>Menu</Label>
    </Button>
  );
};

export default BurgerToggle;
