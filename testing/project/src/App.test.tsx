import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders Todo Component", () => {
  render(<App />);

  expect(screen.getByPlaceholderText("Type your todo")).toBeInTheDocument();
});
