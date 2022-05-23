import styled from "styled-components";

import { device } from "../../../utils/style/breakpoints";

import {
  ProductContainer,
  ProductImage,
} from "../../category/category-products-item/category-products-item.styles";

export const ProductDetailsContainer = styled(ProductContainer)`
  @media ${device.tablet} {
    grid-template-columns: auto auto;
    column-gap: 69px;
  }
  @media ${device.mobileL} {
    grid-template-columns: 1fr;
    column-gap: 69px;
  }
`;

export const ProductDetailsImage = styled(ProductImage)`
  @media ${device.tablet} {
    min-width: 281px;
    width: 100%;
  }
`;
