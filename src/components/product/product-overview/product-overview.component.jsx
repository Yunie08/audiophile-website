import { useContext } from "react";

import { CurrentProductContext } from "../../../utils/contexts/currentProduct.context";

import ProductOverviewText from "../product-overview-text/product-overview-text.component";

import {
  ProductDetailsContainer,
  ProductDetailsImage,
} from "./product-overview.styles";

const ProductOverview = () => {
  const { currentProduct } = useContext(CurrentProductContext);
  const { desktop, tablet, mobile } = currentProduct.image;
  return (
    <ProductDetailsContainer>
      <picture>
        <source media="(max-width: 767px)" srcSet={mobile} />
        <source media="(max-width: 990px)" srcSet={tablet} />
        <source media="(min-width: 991px)" srcSet={desktop} />
        <ProductDetailsImage src={tablet} alt={currentProduct.name} />
      </picture>
      <ProductOverviewText />
    </ProductDetailsContainer>
  );
};

export default ProductOverview;
