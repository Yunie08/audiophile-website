import styled from "styled-components";

import { device } from "../../../utils/style/breakpoints";
import colors from "../../../utils/style/colors";
import { radiusCards } from "../../../utils/style/variables";

export const ProductContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  column-gap: 30px;
  overflow: hidden;
`;

export const ImageContainer = styled.div``;
export const ProductImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: ${radiusCards};
`;

export const CtaContainer = styled.div`
  display: flex;

  padding-left: 95px;
`;
