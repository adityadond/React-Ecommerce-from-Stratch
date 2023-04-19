import React from "react";

import "./Headerc.css";

function HeaderComponents({ text1, text2, emoliFlag }) {
  return (
    <>
      

      <div className="location_twoLine">
        <div>{text1}</div>
        <div className="select">{text2}</div>
      </div>
    </>
  );
}

export default HeaderComponents;
