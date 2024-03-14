import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";

test("If form for adding plant loads", () => {
  render(<Page />);
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Hello world! This is the beginning of the Watering Schedule App...",
    }),
  ).toBeDefined();
});
