import { CategoryTitle } from "./category-header.styles";

const CategoryHeader = ({ category }) => {
  return (
    <CategoryTitle>
      <h1>{category}</h1>
    </CategoryTitle>
  );
};

export default CategoryHeader;
