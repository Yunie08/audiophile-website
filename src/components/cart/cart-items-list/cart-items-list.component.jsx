import React, { useContext } from "react";

import { CartContext } from "../../../utils/contexts/cart.context";
import QuantitySelector from "../../shared/quantity-selector/quantity-selector.component";
import { ProductList, Product, ProductName } from "./cart-items-list.styles";
const CartItemsList = ({ cartItems }) => {
  return (
    cartItems && (
      <ProductList>
        {cartItems.map((item) => (
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
        ))}
      </ProductList>
    )
  );
};

export default CartItemsList;
