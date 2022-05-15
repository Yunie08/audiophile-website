import styled from "styled-components";

import colors from "../../../utils/style/colors";
import { radiusCards } from "../../../utils/style/variables";
import { cardBaseStyle } from "../../../utils/style/layout";

import echoImage from "../../../static/images/home/desktop/pattern-circles.svg";

export const FocusContainer = styled.div`
  ${cardBaseStyle}
  height: 560px;
  background: ${colors.primary};
  border-radius: ${radiusCards};
  justify-content: flex-end;

  background-image: ${(props) => `url(${props.imageUrl.desktop})`},
    url(${echoImage});
  background-repeat: no-repeat;
  background-size: 35%, 944px;
  background-position: bottom -13px left 130px, bottom -360px left -155px;
`;

export const CtaContainer = styled.div`
  width: 35rem;
`;