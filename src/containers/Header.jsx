import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import HeaderComponents from "./HeaderComponet/HeaderComponents";

function Header() {
  return (
    <div className="header">
      <div className="amazonlogo">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS5BARPff9AtRyIs94aBOkX_SDQ6sw3HnA8LmqOxbjZg&s"
            alt="logo"
          />
        </Link>
      </div>
    
      <HeaderComponents
        text1={"Hello"}
        text2={"Select your location"}
        emoliFlag={true}
      />
     

      <HeaderComponents text1={"Hello, sign in"} text2={"Account& Lists"} />
      
      <HeaderComponents text1={"Return"} text2={"& Orders"} />
     
        
        
    <h4 className="header__card"> <Link to="/cart">Cart</Link></h4>
    </div>
  );
}

export default Header;
