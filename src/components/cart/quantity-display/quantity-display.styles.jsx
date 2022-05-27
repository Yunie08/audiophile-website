import styled from "styled-components";
import colors from "../../../utils/style/colors";

export const ProductQuantity = styled.div`
  color: ${colors.dark};
  opacity: 0.5;

  &::before {
    content: "x";
  }
`;
