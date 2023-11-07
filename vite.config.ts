import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";


export default defineConfig({
    plugins: [
        tsconfigPaths()
    ],
    publicDir: "public",
    test: {
        include: ["__tests__/unit/**"]
    }
});
