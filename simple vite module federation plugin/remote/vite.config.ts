import { federation } from "@module-federation/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./RemoteApp": "./src/Display.tsx",
        "./RemoteButton": "./src/components/Button.tsx",
      },
      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
      },
    }),
  ],

  base: "http://localhost:5176",

  build: {
    target: "chrome89",
    rollupOptions: {
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]",
      },
    },
  },

  server: {
    port: 5176,
    origin: "http://localhost:5176",
  },
  preview: {
    port: 5176,
  },
});
