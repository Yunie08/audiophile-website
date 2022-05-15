import styled from "styled-components";

import colors from "../../../utils/style/colors";
import { cardBaseStyle } from "../../../utils/style/layout";

export const FocusContainer = styled.div`
  height: 320px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
`;

export const ImageContainer = styled.div`
  ${cardBaseStyle};
  background-image: ${(props) => `url(${props.imageUrl.desktop})`};
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

export const CtaContainer = styled.div`
  ${cardBaseStyle};
  background: ${colors.tertiary};
`;
