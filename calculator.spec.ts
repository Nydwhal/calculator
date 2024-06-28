import { describe, expect, test } from "@jest/globals";
import { calculate } from "./calculator";

describe("calculator", () => {
  test("empty string", () => {
    expect(calculate("")).toBe(0);
  });
  test("single number", () => {
    expect(calculate("1")).toBe(1);
  });
  test("two numbers", () => {
    expect(calculate("1,2")).toBe(3);
  });
  test("unkown number of arguments", () => {
    expect(calculate("1,2,5,7")).toBe(15);
  });
  test("newline as separator", () => {
    expect(calculate("1\n2,3")).toBe(6);
  });
  test("not allow separators at the end", () => {
    const calc = () => calculate("1,");
    expect(calc).toThrow(Error);
  });
  test("custom separator", () => {
    expect(calculate("//;\n1;2")).toBe(3);
    expect(calculate("//|\n1|2|3")).toBe(6);
    expect(calculate("//sep\n2sep5")).toBe(7);
    expect(() => calculate("//|\n1|2,3")).toThrow(Error);
  });
});
