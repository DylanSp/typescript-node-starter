import { testValue } from "../src/exampleValue";

describe("Main tests", () => {
  it("Expects that 1 = 1", () => {
    expect(testValue).toBe(1);
  });
});
