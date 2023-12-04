import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";

test("App router works with server components", () => {
  render(<Page />);
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Hello world! This is the beginning of the Watering Schedule App...",
    }),
  ).toBeDefined();
});
