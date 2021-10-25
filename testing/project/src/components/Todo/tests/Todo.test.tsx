import { render, screen } from "@testing-library/react";
import { Todo } from "..";
import userEvent from "@testing-library/user-event";

describe("<Todo />", () => {
  it("matches the style", () => {
    const { container } = render(<Todo />);

    expect(container).toMatchSnapshot();
  });

  it("renders the input", () => {
    render(<Todo />);

    expect(screen.getByPlaceholderText("Type your todo")).toBeInTheDocument();
  });

  it("renders the submit button", () => {
    render(<Todo />);

    expect(screen.getByRole("button", { name: "Add" })).toBeInTheDocument();
  });

  describe("when the input is filled", () => {
    describe("and the submit button is clicked", () => {
      it("adds a new item", () => {
        render(<Todo />);

        const input = screen.getByPlaceholderText("Type your todo");
        userEvent.type(input, "Buy milk");

        const submitButton = screen.getByRole("button", { name: "Add" });
        userEvent.click(submitButton);

        expect(screen.getByRole("list")).toHaveTextContent("Buy milk");
      });

      it("clear the input", () => {
        render(<Todo />);

        const input = screen.getByPlaceholderText("Type your todo");
        userEvent.type(input, "Buy milk");

        const submitButton = screen.getByRole("button", { name: "Add" });
        userEvent.click(submitButton);

        expect(screen.getByPlaceholderText("Type your todo")).toHaveTextContent(
          ""
        );
      });
    });
  });
});
