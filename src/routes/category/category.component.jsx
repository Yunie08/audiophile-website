import { useParams } from "react-router-dom";

// Components
import CategoryHeader from "../../components/category/category-header/category-header.component";
import CategoryProducts from "../../components/category/category-products/category-products.component";
import Directory from "../../components/shared/directory/directory.component";
import CompanyFocus from "../../components/shared/company-focus/company-focus.component";

// Styled components
import { Main } from "./category.styles";
import ErrorBoundary from "../../components/shared/error-boundary/error-boundary.component";

const Category = () => {
  const { category } = useParams();

  return (
    <Main className="main">
      <ErrorBoundary>
        <CategoryHeader category={category} />
        <CategoryProducts category={category} />
        <Directory />
        <CompanyFocus />
      </ErrorBoundary>
    </Main>
  );
};

export default Category;
