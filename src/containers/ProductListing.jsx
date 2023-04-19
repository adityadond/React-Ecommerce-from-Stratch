import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts ,fetchProducts} from "../redux/actions/productActions";
import { useEffect } from "react";

function ProductListing() {
  const products = useSelector((state) => state.allProducts.products.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://dummyjson.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProducts(response.data));
    console.log("response", response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("products", products);
  return (
    <>
      <ProductComponent products={products} />
    </>
  );
}

export default ProductListing;
