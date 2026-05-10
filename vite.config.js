import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import path from "path";

export default defineConfig({
    root: "src",
    publicDir: "../public",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, "src/index.html"),
                members: path.resolve(__dirname, "src/members.html"),
                team: path.resolve(__dirname, "src/team.html"),
                memories: path.resolve(__dirname, "src/memories.html"),
            },
        },
    },
    plugins: [ViteEjsPlugin()],
});
