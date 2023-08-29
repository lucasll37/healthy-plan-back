/// <reference types="vitest" />

import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        environmentMatchGlobs: [['src/__tests__/e2e/*.spec.ts', 'prisma']]
    }
});
