import React from "react";
import HomeCard from "./HomeCard";
import "./Home.css";
import Homecard2 from "./HomeCard2";

function Home() {
const homedata=[
    {
        id:1,
        name:"Air Conditioner",
        img:"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/440x460_Tile_AC_05.jpg"
    },
    {
        id:2,
        name:"Refrigerators",
        img:"https://images-eu.ssl-images-amazon.com/images/G/31/IMG_22/Varun/Ref_SummerStore_23/NewLaunches_BrandWise/new-launches-gd.jpg",
    },

    {
        id:3,
        name:"Microwaves",
        img:"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irshad/01-MrR-MWO-Easy-Meal-Plan.jpg",
    },

    {
        id:4,
        name:"Washing Machine",
        img:"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/LA/Vach/May23/washSS.jpg",
    }


]

const mobile=[
    {
        id:1,
        name:"One plus Nord Ce3",
        img:"",
    },
    {
        id:2,
        name:"Samsung M14 5G",
        img:"",
    },

    {
        id:3,
        name:"Realme Narzo",
        img:"",
    }


]

const clothing=
[
    {
        id:1,
        name:"Clothing",
        img:"",
    },
    {
        id:2,
        name:"Footwear",
        img:"",
    },

    {
        id:3,
        name:"Watches",
        img:"",
    },
    {
        id:4,
        name:"Bag and luggages",
        img:"",
    }


]
  return (
    <div className="home__main">
      
      <div className="homeCard__card4">
      <div className="homeCard">
        {" "}
        <HomeCard />
       
      </div>
      <div className="homeCard">
        {" "}
        <Homecard2 heading={"Home appliances | Up to 55% off"} body={"data"} footer="See more"/>
       
      </div>
      <div className="homeCard">
        {" "}
        <Homecard2 heading={"Latest and upcoming launches "} body={"data"} footer="See more"/>
       
      </div>
      <div className="homeCard">
        {" "}
        <Homecard2 heading={" Up to 60% off | Styles for men"} body={"data"} footer="See more"/>
       
      </div>
      <div className="homeCard">
        {" "}
        <Homecard2 heading={" Starting $79 | Amazon Brands & more"} body={"data"} footer="See more"/>
       
      </div>
      
      <div className="homeCard">
        {" "}
        <Homecard2 heading={" Up to 60% off | Styles for men"} body={"data"} footer="See more"/>
       
      </div>
      </div>
      
    </div>
  );
}

export default Home;
