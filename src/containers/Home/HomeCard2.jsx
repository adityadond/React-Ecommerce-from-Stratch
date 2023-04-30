import "./HomeCard2.css"

import React from "react";
import { Link } from "react-router-dom";


function Homecard2({heading, body, footer}) {
  return (
    <div className="homeCard__">
      <div className="homecard2__header">
        <h2>{heading}</h2>
      </div>
      <div className="homecard2__body">
        {body}
      </div>
      <div className="homecard2__footer"><Link to="seeall">{footer}</Link></div>
    </div>
  );
}

export default Homecard2;
