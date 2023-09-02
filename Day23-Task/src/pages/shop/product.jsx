import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const [btnname, setbtnname] = useState("Add to cart");

  const handleAddToCart = () => {
    addToCart(id);
    setbtnname("Remove from cart");
  };

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => handleAddToCart()}>
        {btnname}
      </button>
    </div>
  );
};
