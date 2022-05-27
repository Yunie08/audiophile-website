import React from "react";

import QuantitySelector from "../../shared/quantity-selector/quantity-selector.component";
import QuantityDisplay from "../quantity-display/quantity-display.component";

import { ProductList, Product, ProductName } from "./cart-items-list.styles";

const ITEM_TYPES_CLASSES = {
  cart: "cart",
  checkout: "checkout",
};

const CartItemsList = ({ cartItems, type }) => {
  const getCustomComponent = (type = ITEM_TYPES_CLASSES.cart) =>
    ({
      [ITEM_TYPES_CLASSES.cart]: QuantitySelector,
      [ITEM_TYPES_CLASSES.checkout]: QuantityDisplay,
    }[type]);

  const CustomComponent = getCustomComponent(type);

  return (
    <ProductList>
      {cartItems.map((item) => (
        <Product key={item.slug}>
          <img src={item.thumbnail} alt={item.name} />
          <ProductName>{item.shortName}</ProductName>
          <div>{`$ ${item.price}`}</div>
          <CustomComponent
            quantityToAdd={item.quantity}
            item={item}
            type="cart"
          />
        </Product>
      ))}
    </ProductList>
  );
};

export default CartItemsList;
