import React, { useContext } from "react";
import { ScCartItem, ScCartItemDetails } from "./scParts";
import { CartContext } from "../contexts/CartContext";
const Item = (props) => {
  const {image, title, price} = props
  const { removeItem } = useContext(CartContext);

  return (
    <ScCartItem>
      <img src={image} alt={`${title} book`} />
      <ScCartItemDetails>
        <h2>{title}</h2>
        <p>$ {price}</p>
        <button onClick={()=>removeItem(props.idx)}>Remove from cart</button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;
