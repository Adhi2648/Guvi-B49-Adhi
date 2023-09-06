import "./App.css";
import Cart from "./components/cart";
import { ProductProvider } from "./components/ProductContext";

function App() {
  return (
    <ProductProvider>
      <Cart />
    </ProductProvider>
  );
}

export default App;
