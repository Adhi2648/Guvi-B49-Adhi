import React from "react";
import { Provider } from "react-redux";
import Cart from "./Cart";
import ProductList from "./ProductList";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <h1 className="title">Shopping App</h1>
      <ProductList />
      <Cart />
    </Provider>
  );
}

export default App;
