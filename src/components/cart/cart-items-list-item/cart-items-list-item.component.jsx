import React from "react";

import QuantitySelector from "../../shared/quantity-selector/quantity-selector.component";

import { Product, ProductName } from "./cart-items-list-item.styles";

const CartItemsListItem = (item) => {
  console.log(item);
  return (
    item && (
      <Product>
        <img alt={item.name} src={item.thumbnail} />
        <ProductName>{item.shortName}</ProductName>
        <div>{`$ ${item.price}`}</div>
        <QuantitySelector
          quantityToAdd={item.quantity}
          item={item}
          type="cart"
        />
      </Product>
    )
  );
};

export default CartItemsListItem;
