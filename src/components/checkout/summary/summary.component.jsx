import React, { useContext } from "react";
import { useFormikContext } from "formik";

import { CartContext } from "../../../utils/contexts/cart.context";

import CartItemsList from "../../cart/cart-items-list/cart-items-list.component";
import Button from "../../shared/button/button.component";

import {
  SummaryContainer,
  Title,
  SubTotalsContainer,
  Subtotal,
  SubTotalName,
  SubTotalAmount,
  GrandTotalAmount,
} from "./summary.styles";

const Summary = () => {
  const { cartItems, cartTotalPrice, cartTotalPriceVAT, cartGrandTotal } =
    useContext(CartContext);
  const { submitForm, isSubmitting } = useFormikContext();
  return (
    <SummaryContainer>
      <Title>summary</Title>
      <CartItemsList cartItems={cartItems} type="checkout" />
      <SubTotalsContainer>
        <Subtotal>
          <SubTotalName>Total</SubTotalName>
          <SubTotalAmount>{`${cartTotalPrice.toLocaleString(
            "en-US"
          )}`}</SubTotalAmount>
        </Subtotal>
        <Subtotal>
          <SubTotalName>Shipping</SubTotalName>
          <SubTotalAmount>{cartTotalPrice && "50"}</SubTotalAmount>
        </Subtotal>
        <Subtotal>
          <SubTotalName>VAT (included)</SubTotalName>
          <SubTotalAmount>{cartTotalPriceVAT}</SubTotalAmount>
        </Subtotal>
      </SubTotalsContainer>
      <Subtotal>
        <SubTotalName>Grand total</SubTotalName>
        <GrandTotalAmount>{cartTotalPrice && cartGrandTotal}</GrandTotalAmount>
      </Subtotal>
      <Button
        type="base"
        onClick={submitForm}
        disabled={isSubmitting || cartTotalPrice === 0}
        style={{ margin: 0 }}
      >
        Continue & Pay
      </Button>
    </SummaryContainer>
  );
};

export default Summary;
