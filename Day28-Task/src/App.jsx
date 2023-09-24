import React from "react";
import "./App.css";
import Cart from "./Cart";
import { CartProvider } from "./Context/CartContext";
import ProductList from "./ProductList";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <h1>Shopping App</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
