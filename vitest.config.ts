// vitest.config.ts

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/__tests__/**/*.{test,spec}.ts'],
    globals: true,
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});