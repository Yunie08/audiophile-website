import { useContext } from "react";

import { CurrentProductContext } from "../../../utils/contexts/currentProduct.context";

import RecommendationsItem from "../recommendations-item/recommendations-item.component";

import {
  MainDirectoryContainer,
  RecommendationsDirectoryContainer,
  Title,
} from "./recommendations-directory.styles";

const RecommendationsDirectory = () => {
  const {
    currentProduct: { others },
  } = useContext(CurrentProductContext);

  return (
    <MainDirectoryContainer>
      <Title>You may also like</Title>
      <RecommendationsDirectoryContainer>
        {others.map((item) => (
          <RecommendationsItem key={`reco-${item.slug}`} item={item} />
        ))}
      </RecommendationsDirectoryContainer>
    </MainDirectoryContainer>
  );
};

export default RecommendationsDirectory;
