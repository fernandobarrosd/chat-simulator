import { defineConfig } from "vite";

export default defineConfig({
    server: {
        port: 3000
    },
    preview: {
        port: 5000
    },
    build: {
        outDir: "dist",
        rollupOptions: {
            input: {
                home: "/index.html",
                login: "/login.html",
            }
        }
    }
});