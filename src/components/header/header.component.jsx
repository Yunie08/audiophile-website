import Navigation from "../../routes/navigation/navigation.component";
import { StyledHeader } from "./header.styles";

const Header = () => {
  return (
    <StyledHeader>
      <Navigation parent="header" />
    </StyledHeader>
  );
};

export default Header;
