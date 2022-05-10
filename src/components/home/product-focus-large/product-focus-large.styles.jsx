import styled from "styled-components";

import colors from "../../../utils/style/colors";
import { radiusCards } from "../../../utils/style/variables";

import echoImage from "../../../static/images/home/desktop/pattern-circles.svg";

export const FocusContainer = styled.div`
  height: 560px;
  background: ${colors.primary};
  border-radius: ${radiusCards};
  display: flex;
  align-items: center;
  position: relative;

  background-image: ${(props) => `url(${props.imageUrl.desktop})`},
    url(${echoImage});
  background-repeat: no-repeat;
  background-size: 35%, 944px;
  background-position: bottom -13px left 130px, bottom -360px left -155px;
`;

// export const ImageContainer = styled.div`
//   width: 37%;
//   max-width: 25vw;

//   img {
//     object-fit: contain;
//     width: 100%;
//   }
// `;

export const CtaContainer = styled.div`
  width: 35rem;
  position: absolute;
  left: 60%;
`;
