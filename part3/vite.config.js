import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ["./src/**/*.js", "./src/**/*.jsx"],
      exclude: [],
    }),
  ],
  // server: {
  //   proxy: {
  //     "/": {
  //       target: "http://localhost:3001", // Adjust the target as needed
  //       changeOrigin: true,
  //       // rewrite: (path) => path.replace(/^\/api/, ""), // Adjust the path as needed
  //     },
  //   },
  // },
});
