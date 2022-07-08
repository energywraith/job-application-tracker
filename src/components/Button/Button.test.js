import { render, screen } from "@testing-library/react";
import Button from "./index";

const TEXT_CONTENT = "lemons";

describe("button", () => {
  test("render properly", () => {
    render(<Button>{TEXT_CONTENT}</Button>);
    const button = screen.getByText(/lemons/i);
    expect(button).toBeInTheDocument();
  });

  test("onClick function gets fired on click", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>{TEXT_CONTENT}</Button>);

    const button = screen.getByText(/lemons/i);
    button.click();

    expect(onClick).toHaveBeenCalled();
  });
});
