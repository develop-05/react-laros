import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../button";
import { setItemInCart, deleteItemFromCart } from "../../store/cart/reducer";
import "./BrochureBuy.css";

export const BrochureBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };

  return (
    <div className="brochure-buy">
      <Button
        type={isItemInCart ? "secondary" : "primary" }
        onClick={handleClick}
      >
        {isItemInCart ? "Selected" : "Select"}
      </Button>
    </div>
  );
};
