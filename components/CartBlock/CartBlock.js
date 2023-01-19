import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";
import { CartMenu } from "../CartMenu";
import { ItemsInCart } from "../ItemsInCart";
import { calcTotalPrice } from '../utils';
import "./cart-block.css";

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length}/>
      {isCartMenuVisible && <CartMenu />}
    </div>
  );
};
