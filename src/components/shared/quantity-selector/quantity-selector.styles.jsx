import styled from "styled-components";

import { device } from "../../../utils/style/breakpoints";
import { srOnly } from "../../../utils/style/accessibility";
import colors from "../../../utils/style/colors";

export const HiddenLabel = styled.label`
  ${srOnly}
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 48px;
  width: 120px !important;

  > * {
    border: none;
    background-color: ${colors.tertiary};
  }
`;
export const ValueButton = styled.input`
  color: ${colors.dark};

  &:hover {
    color: ${colors.primary};
  }
`;

export const QuantityInput = styled.input`
  max-width: 40px;
  text-align: center;

  // Remove default arrows
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
