import useMediaQuery from "../../utils/hooks/media-query.hooks";

import Navigation from "../../routes/navigation/navigation.component";
import { StyledHeader } from "./header.styles";

const Header = () => {
  const isSmallScreen = useMediaQuery("(max-width: 991px)");

  return (
    <StyledHeader>
      <Navigation parent="header" isSmallScreen={isSmallScreen} />
    </StyledHeader>
  );
};

export default Header;
