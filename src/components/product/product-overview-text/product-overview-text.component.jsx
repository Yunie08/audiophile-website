import { useContext } from "react";

import { CurrentProductContext } from "../../../utils/contexts/currentProduct.context";
import QuantitySelector from "../../shared/quantity-selector/quantity-selector.component";
import Button from "../../shared/button/button.component";
import {
  OverviewTextContainer,
  NewProduct,
  QuantityContainer,
} from "./product-overview-text.styles";

const ProductOverviewText = () => {
  const {
    currentProduct: { isNew, name, description, price },
  } = useContext(CurrentProductContext);
  // TODO: Update cart on button click
  return (
    <OverviewTextContainer>
      {isNew && <NewProduct>new product</NewProduct>}
      <h1>{name}</h1>
      <p>{description}</p>
      <span>{`$ ${price}`}</span>
      <QuantityContainer>
        <QuantitySelector />
        <Button>Add to cart</Button>
      </QuantityContainer>
    </OverviewTextContainer>
  );
};

export default ProductOverviewText;
