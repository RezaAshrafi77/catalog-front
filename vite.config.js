import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";
import { VitePWA } from "vite-plugin-pwa";
import reactRefresh from "@vitejs/plugin-react-refresh";
import appConfig from "./src/config";


const base = appConfig.base ? "/" + appConfig.base + "/" : undefined;

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "public",
  cacheDir: "node_modules/.cache/vite",
  server: {
    watch: {
      usePolling: true,
      interval: 100,
      binaryInterval: 300,
      ignored: [
        "**/node_modules/**",
        "**/.git/**",
        "**/.DS_Store/**",
        "**/dist/**",
        "**/build/**",
        "**/public/**",
      ],
    },
  },
  base,
  plugins: [
    react(),
    Pages({
      caseSensitive: "false",
    }),
    VitePWA({
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
      },
    }),
    splitVendorChunkPlugin(),
    reactRefresh(),
  ],

  resolve: {
    alias: [{ find: "~", replacement: "/src" }],
  },
  define: {
    "process.env": {},
  },
  build: {
    emptyOutDir: false,
    target: "es2015",
    commonjsOptions: {
      include: [/node_modules/],
    },
    rollupOptions: {
      output: {
        // inlineDynamicImports: true,
        // manualChunks: (id) => {
        //   if (id.includes("node_modules")) {
        //     return "vendors";
        //   }
        // },
        entryFileNames: "js/main.min.js",
        chunkFileNames: "js/[name].min.js",
        assetFileNames: "[ext]/[name].min.[ext]",
      },
    },
    base,
    // chunkFileNames: "chunks/[hash].js",
    sourcemap: false,
    minify: true,
    watch: true,
  },
});
