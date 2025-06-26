import { it, describe, expect } from "vitest";
import { validateTest } from "./validateTest";

describe("validateTest", () => {
  it("returns true for username with 3 characters", () => {
    const name = "joe";
    const result = validateTest(name);
    expect(result).toBe(true);
  });
  it("returns true for username with more  than 3 characters", () => {
    const name = "ponampalam";
    const result = validateTest(name);
    expect(result).toBe(true);
  });
  it("returns false if username contains less than 3 characters", () => {
    const name = "Ty";
    const result = validateTest(name);
    expect(result).toBe(false);
  });
});
