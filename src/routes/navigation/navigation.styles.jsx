import styled from "styled-components";

import { device } from "../../utils/style/breakpoints";

export const NavContainer = styled.nav`
  max-width: 1110px;
  width: ${(props) => props.parent === "header" && "95%"};

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${(props) => props.parent === "header" && "1px solid #333333"};

  @media ${device.tablet} {
    flex-wrap: wrap;
    row-gap: ${(props) => props.parent !== "header" && "32px"};
    margin-bottom: ${(props) => props.parent !== "header" && "32px"};
  }
  @media ${device.mobileL} {
    justify-content: ${(props) => props.parent !== "header" && "center"};
    row-gap: ${(props) => props.parent !== "header" && "48px"};
    margin-bottom: ${(props) => props.parent !== "header" && "48px"};
  }

  a {
    @media ${device.tablet} {
      height: ${(props) => props.parent !== "header" && "25px"};

      &:nth-child(1) {
        height: ${(props) => props.parent !== "header" && "auto"};
      }
    }
  }
`;

export const LeftPart = styled.div`
  display: flex;
  column-gap: 42px;
`;
