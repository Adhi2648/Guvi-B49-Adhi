import React from "react";
import "./Cart.css";
import { useCart } from "./Context/CartContext";

function Cart() {
  const {
    cart,
    totalQuantity,
    totalAmount,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  return (
    <div className="cart-container">
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} - Quantity: {item.quantity} - Price: $
              {item.price * item.quantity}
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount}</p>
      </div>
    </div>
  );
}

export default Cart;
