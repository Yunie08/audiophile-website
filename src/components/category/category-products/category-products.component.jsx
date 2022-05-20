import { useContext } from "react";

// Contexts
import { ProductsContext } from "../../../utils/contexts/products.context";

// Components
import { LayoutContainer } from "../../../utils/style/layout";
import CategoryProductItem from "../category-products-item/category-products-item.component";

import { CategoryProductsContainer } from "./category-products.styles";

const CategoryProducts = ({ category }) => {
  const { products } = useContext(ProductsContext);

  return (
    <LayoutContainer as="section">
      <CategoryProductsContainer>
        {products
          .filter((product) => product.category === category)
          .map((product) => (
            <CategoryProductItem key={product.slug} product={product} />
          ))}
      </CategoryProductsContainer>
    </LayoutContainer>
  );
};

export default CategoryProducts;
