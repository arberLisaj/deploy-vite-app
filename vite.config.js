import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // [Your  GitHub repo name is required]
  base: "/deploy-vite-app/", //  the name of my repo
});
