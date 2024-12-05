import { defineConfig } from 'vite';

export default defineConfig({
  ssr: {
    noExternal: ['@mui/material', '@emotion/react', '@emotion/styled'],
  },
});
