import "./category-products-item.styles";

import ProductCta from "../../shared/product-cta/product-cta.component";

import {
  ProductContainer,
  ProductImage,
  CtaContainer,
} from "./category-products-item.styles";

const CategoryProductItem = ({ product }) => {
  console.log(product);
  return (
    <ProductContainer>
      <ProductImage src={product.categoryImage.desktop} alt={product.name} />
      <CtaContainer>
        <ProductCta type="base" buttonType="base" product={product} />
      </CtaContainer>
    </ProductContainer>
  );
};

export default CategoryProductItem;
