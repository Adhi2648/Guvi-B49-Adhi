import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "./cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalValue = useSelector((state) => state.cart.totalValue);

  return (
    <div className="cart-container">
      <div className="cart">
        <h2>Cart</h2>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Value: ${totalValue.toFixed(2)}</p>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - Quantity: {item.quantity} - Price: $
              {item.price * item.quantity}
              <button onClick={() => dispatch(increaseQuantity(item.id))}>
                +
              </button>
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                -
              </button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cart;
