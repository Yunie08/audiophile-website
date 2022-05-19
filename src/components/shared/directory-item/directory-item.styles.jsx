import styled from "styled-components";

import colors from "../../../utils/style/colors";
import { h6Style } from "../../../utils/style/typography";
import { radiusCards } from "../../../utils/style/variables";
import { device } from "../../../utils/style/breakpoints";

export const CategoryContainer = styled.div`
  height: 204px;
  display: grid;
  grid-template-rows: 57% 20% 23%;
  justify-content: center;
  background-color: ${colors.tertiary};
  border-radius: ${radiusCards};
  margin-bottom: -30px;

  h2 {
    ${h6Style};
    justify-self: center;
    margin: 0;
  }

  button {
    justify-self: center;
    margin: -20px 0 0 0;
  }

  @media ${device.tablet} {
    height: 165px;
  }
  @media ${device.mobileL} {
    max-width: 420px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const ImageContainer = styled.div`
  height: 188.5px;
  align-self: flex-end;
  img {
    height: 100%;
  }

  @media ${device.tablet} {
    height: 150px;
  }
`;
