import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';
import vitestConfig from './vite.config';


export default mergeConfig(vitestConfig, defineConfig({
    test: {
        exclude: [...configDefaults.exclude, 'src/__tests__/unit/**'],
        environmentMatchGlobs: [['src/__tests__/e2e/**', 'prisma']] // problemático
    }
  })
);
