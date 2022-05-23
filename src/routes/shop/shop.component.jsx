import { Routes, Route } from "react-router-dom";

import Category from "../category/category.component";
import Product from "../product/product.component";

const Shop = () => {
  return (
    <Routes>
      <Route path=":category" element={<Category />} />
      <Route path=":category/:product" element={<Product />} />
    </Routes>
  );
};

export default Shop;
