import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import { AiOutlineShoppingCart } from "react-icons/ai";

import HeaderComponents from "./HeaderComponet/HeaderComponents";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
          className="logo"
        />
      </Link>

      <HeaderComponents
        text1={"Hello"}
        text2={"Select your location"}
        emoliFlag={true}
      />
      <div>
        <input placeholder="Search Amazon.In" />
      </div>

      <Link to="/login">Login</Link>

      <HeaderComponents text1={"Return"} text2={"& Orders"} />

      <h4 className="header__optionBasket">
        {" "}
        <AiOutlineShoppingCart size={30} data-testid="shopping-cart-icon" />
        <span className="header__optionLineTwo header__basketCount">1</span>
        <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
          Cart
        </Link>
      </h4>
    </div>
  );
}

export default Header;
