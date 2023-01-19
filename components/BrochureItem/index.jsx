import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BrochureBuy } from "../BrochureBuy";
import { BrochureCover } from "../BrochureCover/BrochureCover";
import {FileCover} from '../FileCover';
import { setCurrentGame } from "../../store/games/reducer";
import "./BrochureItem.scss";

export const BrochureItem = ({ game }) => {

  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentGame(game));
  };

  return (
    <div className={ isItemInCart ? "brochure-item__green" : "brochure-item"} onClick={handleClick}>
      <BrochureCover image={brochure.image} />
      <div className="brochure-item__details">
        <div className="select-topic"><span>{brochure.topic}</span></div>
        <div><span className="brochure-item__title">{brochure.name}</span></div>
        <FileCover file={brochure.file} />
        <div className="brochure-item__buy">
          <BrochureBuy brochure={brochure} />
        </div>

      </div>
    </div>
  );
};
