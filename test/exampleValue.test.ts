/* eslint-disable @typescript-eslint/no-floating-promises */
import { testValue } from "../src/exampleValue";
import { describe, it } from "node:test";
import assert from "node:assert/strict";

describe("Main tests", () => {
  it("Expects that 1 = 1", () => {
    assert.equal(testValue, 1);
  });
});
