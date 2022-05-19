import "./category-products-item.styles";

import ProductCta from "../../shared/product-cta/product-cta.component";

const CategoryProductItem = ({ product }) => {
  console.log(product);
  return (
    <div className="ProductContainer">
      <img src={product.categoryImage.desktop} alt={product.name} />
    </div>
  );
};

export default CategoryProductItem;
