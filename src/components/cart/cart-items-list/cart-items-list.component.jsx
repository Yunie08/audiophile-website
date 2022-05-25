import React, { useContext } from "react";

import { CartContext } from "../../../utils/contexts/cart.context";

import CartItemsListItem from "../cart-items-list-item/cart-items-list-item.component";

const CartItemsList = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <CartItemsList>
      {/* {cartItems?.map((item) => (
        <CartItemsListItem key={item.slug} item={item} />
      ))} */}
      <div>Tests</div>
    </CartItemsList>
  );
};

export default CartItemsList;
