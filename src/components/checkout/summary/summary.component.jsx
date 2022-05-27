import React, { useContext } from "react";

import { CartContext } from "../../../utils/contexts/cart.context";

import CartItemsList from "../../cart/cart-items-list/cart-items-list.component";

const Summary = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="SummaryContainer">
      <h2>summary</h2>
      <CartItemsList cartItems={cartItems} type="checkout" />
    </div>
  );
};

export default Summary;
