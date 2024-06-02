import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButWaitTheresMore from "../butWaitTheresMore";

describe("ButWaitTheresMore", () => {
  it("renders the text", async () => {
    const mockText = "This is the main text";
    render(
      <ButWaitTheresMore text={mockText}>
        <div>Something else</div>
      </ButWaitTheresMore>,
    );

    const component = screen.getByTestId("but-wait-theres-more");

    expect(component).toBeInTheDocument();
    expect(component.textContent).toEqual(mockText);
  });

  it("renders the popover on mouse over", async () => {
    const mockText = "This is the main text";
    const popoverText = "Something else";
    render(
      <ButWaitTheresMore text={mockText}>
        <div>{popoverText}</div>
      </ButWaitTheresMore>,
    );

    const nullPopover = screen.queryByText(popoverText);
    expect(nullPopover).not.toBeInTheDocument();

    const component = screen.getByTestId("but-wait-theres-more");
    await userEvent.hover(component);

    const popover = screen.queryByText(popoverText);
    expect(popover).toBeInTheDocument();

    await userEvent.unhover(component);

    const removedPopover = screen.queryByText(popoverText);
    expect(removedPopover).not.toBeInTheDocument();
  });
});
