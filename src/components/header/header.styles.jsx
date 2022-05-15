import styled from "styled-components";

import colors from "../../utils/style/colors";

export const StyledHeader = styled.header`
  width: 100%;
  /* background-color: transparent; */
  background-color: ${colors.dark};
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 100;
`;
