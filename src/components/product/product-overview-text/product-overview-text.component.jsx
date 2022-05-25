import { useContext, useState } from "react";

// Contexts
import { CartContext } from "../../../utils/contexts/cart.context";
import { CurrentProductContext } from "../../../utils/contexts/currentProduct.context";

import QuantitySelector from "../../shared/quantity-selector/quantity-selector.component";
import Button from "../../shared/button/button.component";
import {
  OverviewTextContainer,
  NewProduct,
  QuantityContainer,
} from "./product-overview-text.styles";

const ProductOverviewText = () => {
  const { currentProduct } = useContext(CurrentProductContext);
  const { isNew, name, description, price } = currentProduct;
  // TODO: Update cart on button click
  const { addItemToCart } = useContext(CartContext);
  const [quantityToAdd, setQuantityToAdd] = useState(1);

  const addToCartHandler = () => {
    addItemToCart(currentProduct, quantityToAdd);
    setQuantityToAdd(1);
  };

  return (
    <OverviewTextContainer>
      {isNew && <NewProduct>new product</NewProduct>}
      <h1>{name}</h1>
      <p>{description}</p>
      <span>{`$ ${price}`}</span>
      <QuantityContainer>
        <QuantitySelector
          quantityToAdd={quantityToAdd}
          setQuantityToAdd={setQuantityToAdd}
        />
        <Button onClick={addToCartHandler}>Add to cart</Button>
      </QuantityContainer>
    </OverviewTextContainer>
  );
};

export default ProductOverviewText;
