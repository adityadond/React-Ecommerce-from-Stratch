import React from "react";
import { Link } from "react-router-dom";
import "./HomeCard.css";

function HomeCard() {
  return (
    <div className="homecard__">
      <div className="homecard__header">
        <h2>Great Summer Sale</h2>
      </div>
      <div className="homecard__body">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/MayART23/GW/Revised/MayART_T2_PC_CC_1X._SY304_CB590948482_.jpg"
          alt="home__logo"
          className="home__logo"
        />
      </div>
      <div className="homecard__footer"><Link to="seeall">See all</Link></div>
    </div>
  );
}

export default HomeCard;
