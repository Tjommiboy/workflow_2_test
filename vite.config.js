import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Dynamically set base depending on environment
export default defineConfig({
  plugins: [react()],
  base: "/workflow_2_test/",
});
