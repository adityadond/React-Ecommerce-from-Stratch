import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts, fetchProducts } from "../redux/actions/productActions";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function ProductListing() {
  const products = useSelector((state) => state.allProducts.products.products);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    setLoading(true);
    const response = await axios
      .get("https://dummyjson.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProducts(response.data));
    setLoading(false);
    console.log("response", response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("products", products);
  if (loading) {
    return <Shimmer />;
  }
  return (
    <>
      <ProductComponent products={products} />
    </>
  );
}

export default ProductListing;
