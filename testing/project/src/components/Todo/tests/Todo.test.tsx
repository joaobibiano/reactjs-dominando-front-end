import { render, screen } from "@testing-library/react";
import { Todo } from "..";

describe("<Todo />", () => {
  it("renders the input", () => {
    render(<Todo />);

    expect(screen.getByPlaceholderText("Type your todo")).toBeInTheDocument();
  });

  it("renders the submit button", () => {
    render(<Todo />);

    expect(screen.getByRole("button", { name: "Add" })).toBeInTheDocument();
  });
});
