import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../../utils/contexts/cart.context";

import CartItemsList from "../cart-items-list/cart-items-list.component";
import Button from "../../shared/button/button.component";

import {
  CartContentContainer,
  ClearButton,
  CartCount,
  Total,
  TotalPrice,
} from "./cart-modal-content.styles";

const CartModalContent = React.forwardRef((props, ref) => {
  const { toggleIsCartOpen, cartItems, cartTotalPrice, cartCount, clearCart } =
    useContext(CartContext);

  const navigate = useNavigate();

  const onDeleteHandler = () => clearCart();
  const onGotoCheckoutHandler = () => {
    navigate("/checkout");
    toggleIsCartOpen();
  };

  return (
    <CartContentContainer ref={ref}>
      <CartCount>{`cart (${cartCount})`}</CartCount>
      <ClearButton onClick={onDeleteHandler}>Remove all</ClearButton>
      <CartItemsList cartItems={cartItems} type="cart" />
      <Total>total</Total>
      <TotalPrice>{cartTotalPrice.toLocaleString("en-US")}</TotalPrice>
      <Button type="base" onClick={onGotoCheckoutHandler}>
        Checkout
      </Button>
    </CartContentContainer>
  );
});

export default CartModalContent;
