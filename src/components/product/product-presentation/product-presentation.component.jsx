import React from "react";

import { ProductContainerMain } from "./product-presentation.styles";
import ProductOverview from "../product-overview/product-overview.component";
import ProductDetails from "../product-details/product-details.component";
import ImageGallery from "../image-gallery/image-gallery.component";
import RecommendationsDirectory from "../recommendations-directory/recommendations-directory.component";

const ProductPresentation = () => {
  return (
    <ProductContainerMain as="section">
      <ProductOverview />
      <ProductDetails />
      <ImageGallery />
      <RecommendationsDirectory />
    </ProductContainerMain>
  );
};

export default ProductPresentation;
