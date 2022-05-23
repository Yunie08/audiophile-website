import { useContext } from "react";

import { CurrentProductContext } from "../../../utils/contexts/currentProduct.context";

import AccessoryList from "../accessory-list/accessory-list.component";

import {
  DetailsContainer,
  FeaturesContainer,
  DetailsTitle,
  AccessoriesContainer,
} from "./products-details.styles";

const ProductDetails = () => {
  const {
    currentProduct: { features },
  } = useContext(CurrentProductContext);
  console.log(features);
  return (
    <DetailsContainer>
      <FeaturesContainer>
        <DetailsTitle>Features</DetailsTitle>
        <p>{features}</p>
      </FeaturesContainer>
      <AccessoriesContainer>
        <DetailsTitle>In the Box</DetailsTitle>
        <AccessoryList />
      </AccessoriesContainer>
    </DetailsContainer>
  );
};

export default ProductDetails;
