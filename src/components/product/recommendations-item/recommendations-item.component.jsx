import { useNavigate } from "react-router-dom";

import Button from "../../shared/button/button.component";

import {
  RecommendationItemContainer,
  ProductName,
} from "./recommendations-item.styles";

const RecommendationsItem = ({ item }) => {
  const navigate = useNavigate();
  const {
    slug,
    name,
    category,
    image: { mobile, tablet, desktop },
  } = item;
  const onNavigateHandler = () =>
    navigate(`../${category}/${slug}`, { replace: true });

  return (
    <RecommendationItemContainer>
      <picture>
        <source media="(max-width: 500px)" srcSet={mobile} />
        <source media="(max-width: 990px)" srcSet={tablet} />
        <source media="(min-width: 991px)" srcSet={desktop} />
        <img src={tablet} alt={name} />
      </picture>
      <ProductName>{name}</ProductName>
      <Button type="base" onClick={onNavigateHandler}>
        See product
      </Button>
    </RecommendationItemContainer>
  );
};

export default RecommendationsItem;
