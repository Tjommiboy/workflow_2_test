import { expect, describe, it, before, vi, beforeEach } from "vitest";
import { register } from "./register";

describe("register", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  it("returns the user data when registration succeeds", async () => {
    const successResponse = {
      id: 1,
      name: "Anand Chetty",
      email: "anand@stud.noroff.no",
    };
    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(successResponse),
    });
    const result = await register({
      name: "Anand Chetty",
      email: "anand@stud.noroff.no",
      password: "password123",
    });
    expect(result).toEqual(successResponse);
  });

  it("throws error when registration fails", async () => {
    fetch.mockResolvedValue({
      ok: false,
      json: () => Promise.resolve(),
    });
    const result = register({
      name: "Anand Chetty",
      email: "anand@stud.noroff.no",
      password: "password123",
    });
    await expect(result).rejects.toThrow();
  });
});
