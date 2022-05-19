import ProductCta from "../../shared/product-cta/product-cta.component";

import { FocusContainer, CtaContainer } from "./product-focus-medium.styles";

const ProductFocusMedium = ({ product }) => {
  const { name, imageUrl, description, route } = product;
  const { desktop, tablet, mobile } = imageUrl;
  return (
    <FocusContainer imageUrl={imageUrl}>
      <CtaContainer>
        <ProductCta product={product} ctaType="minimal" buttonType="inverted" />
      </CtaContainer>
    </FocusContainer>
  );
};

export default ProductFocusMedium;
