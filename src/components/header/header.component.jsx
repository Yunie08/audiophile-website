import useMediaQuery from "../../utils/hooks/media-query.hooks";

import Navigation from "../../routes/navigation/navigation.component";
import { StyledHeader } from "./header.styles";

const Header = () => {
  const isSmallScreen = useMediaQuery("(max-width: 991px)");
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <StyledHeader>
      <Navigation
        parent="header"
        isMobile={isMobile}
        isSmallScreen={isSmallScreen}
      />
    </StyledHeader>
  );
};

export default Header;
