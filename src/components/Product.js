import React, { useContext } from "react";
import { ScProduct } from "./scParts";
import { CartContext } from "../contexts/CartContext";

const Product = (props) => {
  const { product } = props;
  const { addItem } = useContext(CartContext);
  return (
    <ScProduct>
      <img src={product.image} alt={`${product.title} book`} />
      <div className="details">
        <h1 className="title">{product.title}</h1>
        <div className="footer">
          <p className="price">${product.price}</p>
          <button onClick={() => addItem(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </ScProduct>
  );
};

export default Product;
