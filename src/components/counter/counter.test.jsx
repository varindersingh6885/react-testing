import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import Counter from "./counter";

describe("Counter Component", () => {
  test("renders successfully", () => {
    render(<Counter />);

    const counterHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(counterHeading).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", {
      name: /increment/i,
    });

    expect(incrementButton).toBeInTheDocument();
  });

  test("Verify Counter's initial value is 0", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading", { level: 2 });
    expect(countElement).toHaveTextContent("0");
  });

  test("Counter renders 1 after one click on increment button", async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: /increment/i });
    await user.click(incrementButton);

    const countElement = screen.getByRole("heading", { level: 2 });
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicking increment button twice", async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: /increment/i });
    // await user.dblClick(incrementButton);
    await user.pointer({
      keys: "[MouseLeft][MouseLeft]",
      target: incrementButton,
    });

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  test("render a count of 10 after clicking Set button", async () => {
    user.setup();
    render(<Counter />);

    const amountElement = screen.getByRole("spinbutton");
    await user.type(amountElement, "10");
    expect(amountElement).toHaveValue(10);

    const setButton = screen.getByRole("button", { name: /set/i });
    await user.click(setButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  test("elements are focused in the right order", async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: /set/i });

    await user.tab();
    expect(incrementButton).toHaveFocus();

    await user.tab();
    expect(amountInput).toHaveFocus();

    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
