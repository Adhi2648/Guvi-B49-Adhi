import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";

function Cart() {
  const { products, dispatch } = useContext(ProductContext);

  // function to calculate total amount
  const calculateTotalAmount = () => {
    return products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  // Increase quantity action
  const increaseQuantity = (productId) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { productId } });
  };

  // Decrease quantity action
  const decreaseQuantity = (productId) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { productId } });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>
                <button onClick={() => decreaseQuantity(product.id)}>-</button>
                {product.quantity}
                <button onClick={() => increaseQuantity(product.id)}>+</button>
              </td>
              <td>${product.price * product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>Total Amount: ${calculateTotalAmount()}</p>
      </div>
    </div>
  );
}

export default Cart;
