import ProductCta from "../../shared/product-cta/product-cta.component";

import {
  FocusContainer,
  CtaContainer,
  ImageContainer,
} from "./product-focus-split.styles";

const ProductFocusSplit = ({ product }) => {
  const { name, imageUrl, description, route } = product;
  const { desktop, tablet, mobile } = imageUrl;
  return (
    <FocusContainer>
      <ImageContainer imageUrl={imageUrl} />
      <CtaContainer>
        <ProductCta product={product} ctaType="minimal" buttonType="inverted" />
      </CtaContainer>
    </FocusContainer>
  );
};

export default ProductFocusSplit;
