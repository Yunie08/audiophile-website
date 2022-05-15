import styled from "styled-components";

import colors from "../../../utils/style/colors";
import { radiusCards } from "../../../utils/style/variables";
import { cardBaseStyle } from "../../../utils/style/layout";

export const FocusContainer = styled.div`
  ${cardBaseStyle}
  height: 320px;
  background: ${colors.primary};
  border-radius: ${radiusCards};

  background-image: ${(props) => `url(${props.imageUrl.desktop})`};
  background-repeat: no-repeat;
`;

export const CtaContainer = styled.div`
  width: 35rem;
`;
