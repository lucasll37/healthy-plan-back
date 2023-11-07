import { defineConfig, mergeConfig } from "vitest/config";
import vitestConfig from "./vite.config";


export default mergeConfig(vitestConfig, defineConfig({
    test: {
        include: ["__tests__/e2e/**"],
        exclude: ["__tests__/unit/**"],
        // environmentMatchGlobs: [["__tests__/e2e/**", "prisma"]] // problemático
    }
})
);
