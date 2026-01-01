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
      name: "host",
      remotes: {
        remote: {
          type: "module",
          name: "remote",
          entry: "http://localhost:5176/remoteEntry.js",
          entryGlobalName: "remote",
          shareScope: "default",
        },
      },
      filename: "remoteEntry.js",
      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
      },
      // Optional parameter that controls where the host initialization script is injected.
      // By default, it is injected into the index.html file.
      // You can set this to "entry" to inject it into the entry script instead.
      // Useful if your application does not load from index.html.
      hostInitInjectLocation: "html", // or "entry"
      // Controls whether all CSS assets from the bundle should be added to every exposed module.
      // When false (default), the plugin will not process any CSS assets.
      // When true, all CSS assets are bundled into every exposed module.
      bundleAllCSS: false, // or true
    }),
  ],

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
    port: 5175,
  },
  preview: {
    port: 5175,
  },
});
