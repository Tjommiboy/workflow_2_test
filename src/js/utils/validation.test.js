import { it, describe, expect, test } from "vitest";
import { validateEmail } from "./validation";
import { validatePassword } from "./validation";

describe(validateEmail, () => {
  it("returns true for valid student email", () => {
    const email = "student@stud.noroff.no";
    const result = validateEmail(email);
    expect(result).toBe(true);
  });
  it("return true for valid Noroff staff email", () => {
    const email = "teacher@noroff.no";
    const result = validateEmail(email);
    expect(result).toBe(true);
  });
  it("returns false for non-Noroff email", () => {
    const email = "student@gmail.com";
    const result = validateEmail(email);
    expect(result).toBe(false);
  });
  it("returns false for invalid email format", () => {
    const email = "not a mail";
    const result = validateEmail(email);
    expect(result).toBe(false);
  });
});

describe("validatePassword", () => {
  const testCases = [
    { password: "short", expected: false },
    { password: "88888888", expected: true },
    { password: "longerpassword", expected: true },
  ];
  testCases.forEach(({ password, expected }) => {
    it(`returns ${expected} for password ${password}`, () => {
      const result = validatePassword(password);
      expect(result).toBe(expected);
    });
  });
});
