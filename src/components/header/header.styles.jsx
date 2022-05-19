import styled from "styled-components";

import colors from "../../utils/style/colors";
import { device } from "../../utils/style/breakpoints";

export const StyledHeader = styled.header`
  width: 100%;
  /* background-color: rgba(0, 0, 0, 0.7); */
  background-color: ${colors.dark};
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 100;
`;
