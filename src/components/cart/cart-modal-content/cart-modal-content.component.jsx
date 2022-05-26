import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../../utils/contexts/cart.context";

import CartItemsList from "../cart-items-list/cart-items-list.component";
import "./cart-modal-content.styles";
import QuantitySelector from "../../shared/quantity-selector/quantity-selector.component";
import Button from "../../shared/button/button.component";

import {
  CartContentContainer,
  ClearButton,
  CartCount,
  ProductList,
  Product,
  ProductName,
  Total,
  TotalPrice,
} from "./cart-modal-content.styles";

const CartModalContent = React.forwardRef((props, ref) => {
  const {
    isCartOpen,
    toggleIsCartOpen,
    addItemToCart,
    cartItems,
    cartTotalPrice,
    cartCount,
    clearCart,
    removeItemFromCart,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const onDeleteHandler = () => clearCart();
  const onGotoCheckoutHandler = () => {
    navigate("/checkout");
    toggleIsCartOpen();
  };

  // const shortenName = (name, category) => {
  //   const indexToSplit = name
  //     .toUpperCase()
  //     .indexOf(category.toUpperCase().slice(0, -1));
  //   if (indexToSplit !== -1) {
  //     return name.slice(0, indexToSplit).trim();
  //   }
  // };
  return (
    cartItems && (
      <CartContentContainer ref={ref}>
        <CartCount>{`cart (${cartCount})`}</CartCount>
        <ClearButton onClick={onDeleteHandler}>Remove all</ClearButton>
        <CartItemsList cartItems={cartItems} />
        <Total>total</Total>
        <TotalPrice>{`$ ${cartTotalPrice.toLocaleString("en-US")}`}</TotalPrice>
        <Button type="base" onClick={onGotoCheckoutHandler}>
          Checkout
        </Button>
      </CartContentContainer>
    )
  );
});

export default CartModalContent;
