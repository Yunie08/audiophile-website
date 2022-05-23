import "./category-products-item.styles";

import ProductCta from "../../shared/product-cta/product-cta.component";

import {
  ProductContainer,
  ProductImage,
  CtaContainer,
} from "./category-products-item.styles";

const CategoryProductItem = ({ product }) => {
  console.log(product);
  const { desktop, tablet, mobile } = product.categoryImage;
  return (
    <ProductContainer>
      <picture>
        <source media="(max-width: 500px)" srcSet={mobile} />
        <source media="(max-width: 990px)" srcSet={tablet} />
        <source media="(min-width: 991px)" srcSet={desktop} />
        <ProductImage src={tablet} alt={product.name} />
      </picture>
      <CtaContainer>
        <ProductCta ctaType="base" buttonType="base" product={product} />
      </CtaContainer>
    </ProductContainer>
  );
};

export default CategoryProductItem;
