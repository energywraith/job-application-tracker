import { render } from "@testing-library/react";
import Field from "./index";

describe("Checkbox", () => {
  test("render properly", () => {
    render(<Field name="TEST" type="checkbox" />);
    const button = document.querySelector("input[type='checkbox']");
    expect(button).toBeInTheDocument();
  });
});
describe("Text", () => {
  test("render properly", () => {
    render(<Field name="TEST" type="text" />);
    const button = document.querySelector("input[type='text']");
    expect(button).toBeInTheDocument();
  });
});
describe("Select", () => {
  test("render properly", () => {
    render(<Field name="TEST" type="select" />);
    const button = document.querySelector("select");
    expect(button).toBeInTheDocument();
  });
});
