import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        icons: [
          {
            src: "/public/favicon-16x16.png",
            type: "image/png",
            sizes: "16x16",
            purpose: "favicon",
          },
          {
            src: "/public/favicon-32x32.png",
            type: "image/png",
            sizes: "32x32",
            purpose: "favicon",
          },
        ],
      },
    }),
  ],
});
