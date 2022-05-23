import { createContext, useState, useEffect } from "react";

// Add one or more items of a product
const addCartItem = (cartItems, productToAdd, quantityToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + quantityToAdd }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: quantityToAdd }];
};

// Delete one or more items of a product
const deleteSomeCartItem = (
  cartItems,
  productToDelete,
  quantityToDelete = 1
) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productToDelete.id
  );

  if (existingItem.quantity > quantityToDelete) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToDelete.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity - quantityToDelete,
          }
        : cartItem
    );
  }

  return cartItems.filter((cartItem) => cartItem.id === productToDelete.id);
};

// Delete all items of a product
const deleteCartItem = (cartItems, productToDelete) => {
  return cartItems.filter((cartItem) => cartItem.id === productToDelete.id);
};

export const CartContext = createContext({
  isCartOpen: null,
  setIsCartOpen: () => null,
  cartItems: [],
  setCartItems: () => null,
  cartCount: 0,
  setCartCount: () => null,
  cartTotalPrice: 0,
  setCartTotalPrice: () => null,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (totalQuantity, item) => totalQuantity + item.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (cartTotal, item) => cartTotal + item.quantity * item.price,
      0
    );
    setCartTotalPrice(newCartTotal);
  }, [cartItems]);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (productToDelete, quantityToDelete = 1) => {
    setCartItems(
      deleteSomeCartItem(cartItems, productToDelete, quantityToDelete)
    );
  };
  const clearItemFromCart = (productToDelete) => {
    setCartItems(deleteCartItem(cartItems, productToDelete));
  };
  const clearCart = () => setCartItems([]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    toggleIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    clearCart,
    cartCount,
    cartTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
