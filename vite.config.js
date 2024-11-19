import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "@emotion/react"], // Tách các thư viện lớn vào chunk riêng
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": new URL("src/", import.meta.url).pathname,
    },
  },
  server: {
    host: "0.0.0.0",
    proxy: {
      "/login/google": {
        target:
          "https://movie-web-backend-2pz8.onrender.com/api/v1/auth/google",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/login\/google/, ""),
      },
    },
  },
});
