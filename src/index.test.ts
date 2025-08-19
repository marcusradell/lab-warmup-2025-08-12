import { deepStrictEqual } from "assert";
import { test, describe } from "node:test";

describe("Basic test", () => {
  test("should assert that 1 is deeply equal to 0", () => {
    deepStrictEqual(1, 0);
  });
});
