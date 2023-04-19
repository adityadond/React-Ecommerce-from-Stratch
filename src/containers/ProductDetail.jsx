import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProducts,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import Shimmer from "./Shimmer";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const product = useSelector((state) => state.product);
  console.log(id, product);
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const respose = await axios
      .get(`https://dummyjson.com/products/${id}`)
      .catch((err) => console.log(err));
    dispatch(selectedProducts(respose.data));
  };

  useEffect(() => {
    if (id && id !== "") fetchProduct();

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [id]);

  //   console.log("id", response)
  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>
          <Shimmer />
        </div>
      ) : (
        <div className="cardss">
          <img
            src={product.thumbnail}
            alt={product.thumbnail}
            className="imgLogos"
          />
          <div className="card_titles">{product.title}</div>
          <div>{product.brand}</div>
          <div className="card_dess">{product.description}</div>
          <div className="prices"> ${product.price}</div>
          <button className="addToCart">Add to cart</button>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
