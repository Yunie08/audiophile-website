import { useState, useContext } from "react";

import { CartContext } from "../../../utils/contexts/cart.context";
import {
  HiddenLabel,
  InputContainer,
  ValueButton,
  QuantityInput,
} from "./quantity-selector.styles";

const QuantitySelector = ({ quantityToAdd, setQuantityToAdd, item }) => {
  const { addItemToCart, removeItemFromCart, setCartItemQuantity } =
    useContext(CartContext);

  const incrementQuantity = () => {
    setQuantityToAdd
      ? setQuantityToAdd(quantityToAdd + 1)
      : addItemToCart(item, 1);
  };
  const decrementQuantity = () => {
    setQuantityToAdd
      ? quantityToAdd > 0 && setQuantityToAdd(quantityToAdd - 1)
      : removeItemFromCart(item, 1);
  };

  const onChangeHandler = (e) => {
    setQuantityToAdd
      ? setQuantityToAdd(e.target.value * 1)
      : setCartItemQuantity(item, e.target.value * 1);
  };
  const minQty = setQuantityToAdd ? "1" : "0";
  return (
    <>
      <HiddenLabel htmlFor="quantity">Quantity</HiddenLabel>
      <InputContainer>
        <ValueButton type="button" value="-" onClick={decrementQuantity} />
        <QuantityInput
          type="number"
          min={minQty}
          step="1"
          value={quantityToAdd}
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
