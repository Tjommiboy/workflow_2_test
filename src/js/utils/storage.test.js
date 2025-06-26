// js/utils/storage.test.js
import { expect, describe, it, beforeEach } from "vitest";
import { saveToken, getToken } from "./storage";

describe("Storage functions", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("saveToken", () => {
    it("saves the token to storage", () => {
      const testToken = "test-token";
      saveToken(testToken);
      expect(localStorage.getItem("token")).toBe(JSON.stringify(testToken));
    });
  });

  describe("getToken", () => {
    it("retrieves the token from storage", () => {
      // Set up - directly save a token to localStorage
      localStorage.setItem("token", JSON.stringify("test-token"));

      const retrievedToken = getToken();
      expect(retrievedToken).toBe("test-token");
    });

    it("returns null when no token exists", () => {
      const token = getToken();
      // Will return null because beforeEach gives us a fresh empty storage
      expect(token).toBeNull();
    });
  });
});
