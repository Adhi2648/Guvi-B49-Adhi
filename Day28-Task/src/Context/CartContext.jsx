import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          item.quantity += 1;
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
    }
    updateTotalQuantityAndAmount(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    updateTotalQuantityAndAmount(updatedCart);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        item.quantity += 1;
      }
      return item;
    });
    setCart(updatedCart);
    updateTotalQuantityAndAmount(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        item.quantity -= 1;
      }
      return item;
    });
    setCart(updatedCart);
    updateTotalQuantityAndAmount(updatedCart);
  };

  const updateTotalQuantityAndAmount = (cartItems) => {
    const newTotalQuantity = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const newTotalAmount = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalQuantity(newTotalQuantity);
    setTotalAmount(newTotalAmount);
  };

  const contextValue = {
    cart,
    totalQuantity,
    totalAmount,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
