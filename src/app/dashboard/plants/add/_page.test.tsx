import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import Page from "./page";

test("App router works on dashboard", () => {
  render(<Page />);
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Add new plant",
    }),
  ).toBeDefined();
});
