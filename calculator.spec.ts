import { describe, expect, test } from "@jest/globals";
import { calculate } from "./calculator";

describe("calculator", () => {
  test("empty string", () => {
    expect(calculate("")).toBe(0);
  });
  test("single number", () => {
    expect(calculate("1")).toBe(1);
  });
});
