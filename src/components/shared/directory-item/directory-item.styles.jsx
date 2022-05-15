import styled from "styled-components";

import colors from "../../../utils/style/colors";
import { h6Style } from "../../../utils/style/typography";
import { radiusCards } from "../../../utils/style/variables";

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
    margin: -15px 0 0 0;
  }

  button {
    justify-self: center;
    margin: -20px 0 0 0;
  }
`;

export const ImageContainer = styled.div`
  height: 188.5px;
  align-self: flex-end;
  img {
    height: 100%;
  }
`;
