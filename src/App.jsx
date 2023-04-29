import Header from "./containers/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import ErrorPage from "./containers/ErrorPage";
import Footer from "./containers/Footer";
import About from "./containers/About";
import Cart from "./containers/Cart/Cart";

import NavItems from './containers/NavItems/NavItems';
import Login from "./containers/Login/Login";
import ProtectedRoutes from "./containers/ProtectedRoutes";

const AppLayout = () => {
  return (
    <>
      <Header />
      <NavItems/>
      <Outlet />
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ProductListing />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      // {
      //   path: "/about",
      //   element: <ProtectedRoutes auth={false} component={<About/>}/>,
      // },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default AppLayout;
