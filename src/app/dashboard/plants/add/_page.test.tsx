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

test("On page Add plant form displays", () => {
  render(<Page />);
  expect(screen.getByTestId("plant-name-label")).toBeDefined();
  expect(screen.getByTestId("plant-location")).toBeDefined();
  expect(screen.getByTestId("plant-frequency")).toBeDefined();
});
