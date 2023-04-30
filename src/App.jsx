import Header from "./containers/Header";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import ErrorPage from "./containers/ErrorPage";
import Footer from "./containers/Footer";
import About from "./containers/About";
import Cart from "./containers/Cart/Cart";
import NavItems from "./containers/NavItems/NavItems";
import Login from "./containers/Login/Login";
import Home from "./containers/Home/Home";

const App = () => {
  return (
    <>
      <Header />
      <NavItems />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="seeall" element={<ProductListing />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
