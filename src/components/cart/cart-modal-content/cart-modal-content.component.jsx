import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../../utils/contexts/cart.context";

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
      <ProductList>
        {cartItems.map((item) => (
          <Product key={item.slug}>
            <img src={item.thumbnail} alt={item.name} />
            <ProductName>{item.shortName}</ProductName>
            <div>{`$ ${item.price}`}</div>
            <QuantitySelector
              quantityToAdd={item.quantity}
              item={item}
              type="cart"
            />
          </Product>
        ))}
      </ProductList>
      <Total>total</Total>
      <TotalPrice>{`$ ${cartTotalPrice.toLocaleString("en-US")}`}</TotalPrice>
      <Button type="base" onClick={onGotoCheckoutHandler}>
        Checkout
      </Button>
    </CartContentContainer>
  );
});

export default CartModalContent;
