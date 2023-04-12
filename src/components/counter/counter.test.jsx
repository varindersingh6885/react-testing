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
});
