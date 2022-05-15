import styled from "styled-components";

import colors from "../../../utils/style/colors";
import { radiusCards } from "../../../utils/style/variables";
import { h2Style } from "../../../utils/style/typography";

import backgroundImage from "../../../static/images/shared/desktop/image-best-gear.jpg";

export const CompanyFocusContainer = styled.div`
  height: 588px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px; // TODO: refactor
  margin: 200px 0;
`;

export const TextContainer = styled.div`
  padding-right: 95px;
  align-self: center;
  h2 {
    ${h2Style}
  }

  span {
    color: ${colors.primary};
  }

  p {
    opacity: 0.8;
  }
`;

export const ImageContainer = styled.div`
  border-radius: ${radiusCards};
  background-image: url(${backgroundImage});
`;
