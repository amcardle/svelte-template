import { multiply } from "./foo.js";
import { describe, expect, test } from "@jest/globals";

test("multiply", () => {
  expect(multiply(2, 4)).toEqual(10);
});
