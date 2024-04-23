import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";

test("Add new plant", () => {
  render(<Page />);
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Add new plant",
    }),
  ).toBeDefined();
});

test('On page Add plant "Plant Name" displays', () => {
  render(<Page />);
  expect(screen.getByTestId("plant-name-label")).toBeDefined();
});
