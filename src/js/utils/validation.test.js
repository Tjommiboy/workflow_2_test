import { it, describe, expect, test } from "vitest";
import { validateEmail } from "./validation";
import { validatePassword } from "./validation";
import { validateForm } from "./validation";

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

describe("validateForm", () => {
  const testCases = [
    {
      email: "valid@stud.noroff.no",
      password: "validpass",
      expected: { isValid: true, errors: {} },
    },
    {
      email: "invalid@gmail.com",
      password: "short",
      expected: {
        isValid: false,
        errors: {
          email: "Please enter a valid Noroff email address",
          password: "Password must be at least 8 characters",
        },
      },
    },
    {
      email: "valid@noroff.no",
      password: "short",
      expected: {
        isValid: false,
        errors: {
          password: "Password must be at least 8 characters",
        },
      },
    },
  ];
  testCases.forEach(({ email, password, expected }) => {
    it(`validates correctly for email "${email}" and password "${password}"`, () => {
      const result = validateForm(email, password);
      expect(result).toEqual(expected);
    });
  });
});
