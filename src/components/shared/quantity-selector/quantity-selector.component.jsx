import { useState } from "react";

import {
  HiddenLabel,
  InputContainer,
  ValueButton,
  QuantityInput,
} from "./quantity-selector.styles";

const QuantitySelector = () => {
  let [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => quantity > 0 && setQuantity(quantity - 1);
  const onChangeHandler = (e) => setQuantity(e.target.value * 1);
  return (
    <>
      <HiddenLabel htmlFor="quantity">Quantity</HiddenLabel>
      <InputContainer>
        <ValueButton type="button" value="-" onClick={decrementQuantity} />
        <QuantityInput
          type="number"
          min="1"
          step="1"
          value={quantity}
          onChange={onChangeHandler}
          name="quantity"
          id="quantity"
        />
        <ValueButton type="button" value="+" onClick={incrementQuantity} />
      </InputContainer>
    </>
  );
};

export default QuantitySelector;
