import React, { useContext } from "react";
import { ScCartItem, ScCartItemDetails } from "./scParts";
import { ProductContext } from "../contexts/ProductContext";
const Item = (props) => {
  const {image, title, price} = props
  const { removeItem } = useContext(ProductContext);

  return (
    <ScCartItem>
      <img src={image} alt={`${title} book`} />
      <ScCartItemDetails>
        <h2>{title}</h2>
        <p>$ {price}</p>
        <button onClick={()=>removeItem(props)}>Remove from cart</button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;
