import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../containers/Header";

describe("Header", () => {
  it("renders the logo image", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const logoImage = screen.getByAltText("logo");
    expect(logoImage).toBeInTheDocument();
  });

  it("renders the search input", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const searchInput = screen.getByPlaceholderText("Search Amazon.In");
    expect(searchInput).toBeInTheDocument();
  });

  it("renders the login link", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const loginLink = screen.getByText("Login");
    expect(loginLink).toBeInTheDocument();
  });

  it("renders the 'Return & Orders' section", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const returnOrdersSection = screen.getByText("Return");
    expect(returnOrdersSection).toBeInTheDocument();
  });

  it("renders the shopping cart icon", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const shoppingCartIcon = screen.getByTestId("shopping-cart-icon");
    expect(shoppingCartIcon).toBeInTheDocument();
  });

  it("renders the cart link", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const cartLink = screen.getByText("Cart");
    expect(cartLink).toBeInTheDocument();
  });
});
