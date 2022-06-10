import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { ProductsContext } from "../../utils/contexts/products.context";
import { CurrentProductContext } from "../../utils/contexts/currentProduct.context";

import ErrorBoundary from "../../components/shared/error-boundary/error-boundary.component";
import { LayoutContainer } from "../../utils/style/layout";
import { MainProductPage } from "./product.styles";
import GoBackButton from "../../components/shared/go-back-button/go-back-button.component";
import ProductPresentation from "../../components/product/product-presentation/product-presentation.component";
import Directory from "../../components/shared/directory/directory.component";
import CompanyFocus from "../../components/shared/company-focus/company-focus.component";

const Product = () => {
  const navigate = useNavigate();
  const { products } = useContext(ProductsContext);
  const { currentProduct, setCurrentProduct } = useContext(
    CurrentProductContext
  );
  const { product } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const productArray = products.filter((item) => item.slug === product);
    setCurrentProduct(productArray[0]);
    setIsLoading(false);
  }, [product]);

  return (
    <MainProductPage className="main">
      <ErrorBoundary>
        <LayoutContainer>
          <GoBackButton />
          {!isLoading && <ProductPresentation />}
        </LayoutContainer>
        <Directory />
        <CompanyFocus />
      </ErrorBoundary>
    </MainProductPage>
  );
};

export default Product;
