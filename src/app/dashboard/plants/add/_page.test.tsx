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
  expect(screen.getByTestId("plant-name")).toBeDefined();
  expect(screen.getByText("Plant Name")).toBeDefined();
  expect(screen.getByText("Location")).toBeDefined();
  expect(screen.getByText("Watering frequency")).toBeDefined();
  expect(screen.getByText("Volume of water")).toBeDefined();
  expect(screen.getByText("Instructions")).toBeDefined();
});
