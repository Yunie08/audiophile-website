import { useParams } from "react-router-dom";

// Components
import CategoryHeader from "../../components/category/category-header/category-header.component";
import CategoryProducts from "../../components/category/category-products/category-products.component";
import Directory from "../../components/shared/directory/directory.component";
import CompanyFocus from "../../components/shared/company-focus/company-focus.component";

// Styled components
import { Main } from "./category.styles";

const Category = () => {
  const { category } = useParams();

  return (
    <Main className="main">
      <CategoryHeader category={category} />
      <CategoryProducts category={category} />
      <Directory />
      <CompanyFocus />
    </Main>
  );
};

export default Category;
