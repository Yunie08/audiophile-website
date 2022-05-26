import styled from "styled-components";

import { device } from "../../../utils/style/breakpoints";
import colors from "../../../utils/style/colors";

export const GoBackButtonStyled = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  opacity: 0.7;
  align-self: flex-start;
  text-transform: capitalize;

  margin: 79px 0 56px 0;

  &:hover {
    color: ${colors.primary};
    opacity: 1;
  }

  &:focus {
    outline: auto;
    outline-color: ${colors.dark};
    outline-offset: 2px;
  }

  @media ${device.tablet} {
    margin: 23px 0 14px 0;
    padding: 10px 0;
  }
  @media ${device.mobileL} {
    margin: 6px 0 14px;
  }
`;
