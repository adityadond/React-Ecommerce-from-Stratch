import React from "react";

import "./ProductComponent.css";
import { Link } from "react-router-dom";

function ProductComponent({products}) {
console.log(products)


  const renderList = products?.map((product) => {
    return (
      <>
        <Link to={`/product/${product.id}`}  style={{ textDecoration: 'none' , color:"black"}}>
          <div className="cards">
            <img
              src={product.thumbnail}
              alt={product.thumbnail}
              className="imgLogo"
            />
            <div className="card_title">{product.title}</div>
            <div>{product.brand}</div>
            <div className="card_des">{product.description}</div>
            {/* <div className="card_des">
          {Array(val)
            .fill(rating)
            .map((_, i) => (
              <p>⭐</p>
            ))} */}
        {/* </div> */}
            <div className="price"> ${product.price}</div>
          </div>
        </Link>
      </>
    );
  });
  return(
     <div className="renderlist">{renderList}</div>);
}

export default ProductComponent;
