import React from "react";

import { CartItemContainer } from "./cart-items-list-item.styles";

const CartItemsListItem = ({ item }) => {
  const { thumbnail, name, category, price, quantity } = item;

  return <CartItemContainer></CartItemContainer>;
};

export default CartItemsListItem;
