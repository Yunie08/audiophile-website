import ProductCta from "../../shared/product-cta/product-cta.component";

import { FocusContainer, CtaContainer } from "./product-focus-large.styles";

const ProductFocusLarge = ({ product }) => {
  const { name, imageUrl, description, route } = product;
  const { desktop, tablet, mobile } = imageUrl;
  return (
    <FocusContainer imageUrl={imageUrl}>
      <CtaContainer>
        <ProductCta product={product} ctaType="main" buttonType="dark" />
      </CtaContainer>
    </FocusContainer>
  );
};
// TODO:
export default ProductFocusLarge;
