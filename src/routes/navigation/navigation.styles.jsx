import styled from "styled-components";

import { device } from "../../utils/style/breakpoints";

export const NavContainer = styled.nav`
  max-width: 1110px;
  width: ${(props) => props.parent === "header" && "90%"};

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${(props) => props.parent === "header" && "1px solid #979797"};

  @media ${device.tablet} {
    flex-wrap: wrap;

    &:nth-child(2) {
      margin-right: auto !important;
    }
  }
`;
