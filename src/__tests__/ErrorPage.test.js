import React from "react";
import { render } from "@testing-library/react";
import ErrorPage from "../containers/ErrorPage";
import { useRouteError } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useRouteError: jest.fn(),
}));

describe("ErrorPage component", () => {
  it("should render the error message", () => {
    const error = { message: "Something went wrong!" };
    useRouteError.mockReturnValue(error);

    const { getByText } = render(<ErrorPage />);
    expect(getByText(error.message)).toBeInTheDocument();
  });

  it("should render the error status text if available", () => {
    const error = { statusText: "Not Found" };
    useRouteError.mockReturnValue(error);

    const { getByText } = render(<ErrorPage />);
    expect(getByText(error.statusText)).toBeInTheDocument();
  });

  it("should render a generic error message if no error message is available", () => {
    useRouteError.mockReturnValue(null);

    const { getByText } = render(<ErrorPage />);
    expect(
      getByText("Sorry, an unexpected error has occurred.")
    ).toBeInTheDocument();
  });
});
